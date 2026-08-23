#!/usr/bin/env python3
"""Aggregate WorkStyle v0.7 cognitive JSON exports.

Usage:
    python tools/workstyle15/analyze-v07.py exports/*.json

Outputs to stdout:
- session summary
- per-item response / context / NA / unclear / timing metrics
- per-axis aggregate metrics

This script is for cognitive R&D only. It does not produce respondent scores.
"""

from __future__ import annotations

import json
import statistics
import sys
from collections import defaultdict
from pathlib import Path
from typing import Any

EXPECTED_SCHEMA = "workstyle-v07-cognitive-session-v1"


def median(values: list[float]) -> float | None:
    return statistics.median(values) if values else None


def mean(values: list[float]) -> float | None:
    return statistics.fmean(values) if values else None


def pct(n: int, d: int) -> float:
    return (100.0 * n / d) if d else 0.0


def fmt(value: float | None, digits: int = 1) -> str:
    return "—" if value is None else f"{value:.{digits}f}"


def load_session(path: Path) -> dict[str, Any] | None:
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        print(f"WARN  {path}: cannot read JSON ({exc})", file=sys.stderr)
        return None

    if data.get("schema") != EXPECTED_SCHEMA:
        print(
            f"WARN  {path}: schema={data.get('schema')!r}, expected {EXPECTED_SCHEMA!r}; skipped",
            file=sys.stderr,
        )
        return None

    return data


def main(argv: list[str]) -> int:
    if not argv:
        print("Usage: python tools/workstyle15/analyze-v07.py <session1.json> [session2.json ...]", file=sys.stderr)
        return 2

    paths = [Path(arg) for arg in argv]
    sessions: list[tuple[Path, dict[str, Any]]] = []
    for path in paths:
        data = load_session(path)
        if data is not None:
            sessions.append((path, data))

    if not sessions:
        print("No valid v0.7 cognitive sessions found.", file=sys.stderr)
        return 1

    # id -> axis mapping from exports. Fall back to unknown when old export omitted itemMap.
    axis_by_item: dict[str, str] = {}
    for _, data in sessions:
        for entry in data.get("itemMap", []) or []:
            item_id = entry.get("id")
            axis = entry.get("axis")
            if item_id and axis:
                axis_by_item[item_id] = axis

    item_rows: dict[str, dict[str, Any]] = defaultdict(
        lambda: {
            "n_seen": 0,
            "n_scale": 0,
            "n_context": 0,
            "n_na": 0,
            "n_unclear": 0,
            "scale_values": [],
            "timing_ms": [],
        }
    )

    session_summaries: list[dict[str, Any]] = []

    for path, data in sessions:
        responses = data.get("responses", {}) or {}
        timing = data.get("timingMs", {}) or {}

        counts = {"scale": 0, "context": 0, "na": 0, "unclear": 0}
        for item_id, response in responses.items():
            row = item_rows[item_id]
            row["n_seen"] += 1

            kind = response.get("kind")
            if kind == "scale":
                row["n_scale"] += 1
                counts["scale"] += 1
                value = response.get("value")
                if isinstance(value, (int, float)):
                    row["scale_values"].append(float(value))
            elif kind == "context":
                row["n_context"] += 1
                counts["context"] += 1
            elif kind == "na":
                row["n_na"] += 1
                counts["na"] += 1

            if response.get("unclear"):
                row["n_unclear"] += 1
                counts["unclear"] += 1

            value_ms = timing.get(item_id)
            if isinstance(value_ms, (int, float)) and value_ms >= 0:
                row["timing_ms"].append(float(value_ms))

        session_summaries.append(
            {
                "file": path.name,
                "session_id": data.get("sessionId", ""),
                "completed": bool(data.get("completedAt")),
                "answered": len(responses),
                **counts,
            }
        )

    print("\nSESSION SUMMARY")
    print("file\tanswered\tscale\tcontext\tNA\tunclear\tcompleted")
    for row in session_summaries:
        print(
            f"{row['file']}\t{row['answered']}\t{row['scale']}\t{row['context']}\t"
            f"{row['na']}\t{row['unclear']}\t{row['completed']}"
        )

    print("\nITEM SUMMARY")
    print("item\taxis\tn\tscale%\tcontext%\tNA%\tunclear%\tmean_scale\tmedian_ms")

    axis_acc: dict[str, dict[str, Any]] = defaultdict(
        lambda: {
            "item_count": 0,
            "n_seen": 0,
            "n_scale": 0,
            "n_context": 0,
            "n_na": 0,
            "n_unclear": 0,
            "timing_ms": [],
            "scale_values": [],
        }
    )

    for item_id in sorted(item_rows):
        row = item_rows[item_id]
        n = row["n_seen"]
        axis = axis_by_item.get(item_id, "unknown")
        print(
            f"{item_id}\t{axis}\t{n}\t{pct(row['n_scale'], n):.1f}\t"
            f"{pct(row['n_context'], n):.1f}\t{pct(row['n_na'], n):.1f}\t"
            f"{pct(row['n_unclear'], n):.1f}\t{fmt(mean(row['scale_values']), 2)}\t"
            f"{fmt(median(row['timing_ms']), 0)}"
        )

        acc = axis_acc[axis]
        acc["item_count"] += 1
        for key in ("n_seen", "n_scale", "n_context", "n_na", "n_unclear"):
            acc[key] += row[key]
        acc["timing_ms"].extend(row["timing_ms"])
        acc["scale_values"].extend(row["scale_values"])

    print("\nAXIS AGGREGATE (COGNITIVE SIGNALS ONLY — NOT SCORES)")
    print("axis\titems\tn\tcontext%\tNA%\tunclear%\tmean_scale\tmedian_ms")
    for axis in sorted(axis_acc):
        row = axis_acc[axis]
        n = row["n_seen"]
        print(
            f"{axis}\t{row['item_count']}\t{n}\t{pct(row['n_context'], n):.1f}\t"
            f"{pct(row['n_na'], n):.1f}\t{pct(row['n_unclear'], n):.1f}\t"
            f"{fmt(mean(row['scale_values']), 2)}\t{fmt(median(row['timing_ms']), 0)}"
        )

    print("\nREVIEW PRIORITY")
    print("Items with context, NA or unclear response in >= 25% of observed sessions:")
    flagged = []
    for item_id, row in item_rows.items():
        n = row["n_seen"]
        if not n:
            continue
        issue_rate = pct(row["n_context"] + row["n_na"] + row["n_unclear"], n)
        if issue_rate >= 25.0:
            flagged.append((issue_rate, item_id, axis_by_item.get(item_id, "unknown")))

    if not flagged:
        print("(none)")
    else:
        for issue_rate, item_id, axis in sorted(flagged, reverse=True):
            print(f"{item_id}\t{axis}\t{issue_rate:.1f}% combined issue signal")

    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
