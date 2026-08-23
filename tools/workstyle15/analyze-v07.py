#!/usr/bin/env python3
"""Aggregate WorkStyle v0.7 cognitive JSON exports.

Usage:
    python tools/workstyle15/analyze-v07.py exports/*.json

Outputs to stdout:
- session summary, including optional pilot context and break time
- per-item cognitive issue / response / timing metrics
- per-axis cognitive aggregate metrics
- per-block timing summary
- review-priority list

This script is for cognitive R&D only. It does not produce respondent scores.
Directional summaries are descriptive response patterns, not validated traits.
"""

from __future__ import annotations

import json
import statistics
import sys
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any

SCHEMA_PREFIX = "workstyle-v07-cognitive-session-v"


def median(values: list[float]) -> float | None:
    return statistics.median(values) if values else None


def mean(values: list[float]) -> float | None:
    return statistics.fmean(values) if values else None


def pct(n: int, d: int) -> float:
    return (100.0 * n / d) if d else 0.0


def fmt(value: float | None, digits: int = 1) -> str:
    return "—" if value is None else f"{value:.{digits}f}"


def safe_ms(value: Any) -> float | None:
    if isinstance(value, (int, float)) and value >= 0:
        return float(value)
    return None


def load_session(path: Path) -> dict[str, Any] | None:
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        print(f"WARN  {path}: cannot read JSON ({exc})", file=sys.stderr)
        return None

    schema = str(data.get("schema") or "")
    if not schema.startswith(SCHEMA_PREFIX):
        print(
            f"WARN  {path}: schema={schema!r}, expected prefix {SCHEMA_PREFIX!r}; skipped",
            file=sys.stderr,
        )
        return None

    return data


def block_for_position(position: int, total: int) -> int:
    """Current 34-item v0.7 form uses 12 + 11 + 11.

    Older exports are still accepted. For non-34 forms this returns one block.
    Position is 1-based.
    """
    if total != 34:
        return 1
    if position <= 12:
        return 1
    if position <= 23:
        return 2
    return 3


def main(argv: list[str]) -> int:
    if not argv:
        print(
            "Usage: python tools/workstyle15/analyze-v07.py <session1.json> [session2.json ...]",
            file=sys.stderr,
        )
        return 2

    sessions: list[tuple[Path, dict[str, Any]]] = []
    for arg in argv:
        path = Path(arg)
        data = load_session(path)
        if data is not None:
            sessions.append((path, data))

    if not sessions:
        print("No valid v0.7 cognitive sessions found.", file=sys.stderr)
        return 1

    axis_by_item: dict[str, str] = {}
    text_by_item: dict[str, str] = {}
    for _, data in sessions:
        for entry in data.get("itemMap", []) or []:
            item_id = entry.get("id")
            if not item_id:
                continue
            axis = entry.get("axis")
            if axis:
                axis_by_item[item_id] = axis
            stem = entry.get("stem")
            if stem:
                text_by_item[item_id] = stem

    item_rows: dict[str, dict[str, Any]] = defaultdict(
        lambda: {
            "n_seen": 0,
            "n_scale": 0,
            "n_context": 0,
            "n_na": 0,
            "n_unclear": 0,
            "n_duplicate": 0,
            "n_issue_any": 0,
            "scale_values": [],
            "scale_counts": Counter(),
            "timing_ms": [],
        }
    )
    block_timing: dict[int, list[float]] = defaultdict(list)
    session_summaries: list[dict[str, Any]] = []

    for path, data in sessions:
        responses = data.get("responses", {}) or {}
        timing = data.get("timingMs", {}) or {}
        order = data.get("order", []) or []
        total = len(order) or 34
        position_by_item = {item_id: i + 1 for i, item_id in enumerate(order)}

        counts = {
            "scale": 0,
            "context": 0,
            "na": 0,
            "unclear": 0,
            "duplicate": 0,
            "issue_any": 0,
        }

        for item_id, response in responses.items():
            row = item_rows[item_id]
            row["n_seen"] += 1
            kind = response.get("kind")

            if kind == "scale":
                row["n_scale"] += 1
                counts["scale"] += 1
                value = response.get("value")
                if isinstance(value, (int, float)) and 1 <= value <= 5:
                    v = int(value)
                    row["scale_values"].append(float(v))
                    row["scale_counts"][v] += 1
            elif kind == "context":
                row["n_context"] += 1
                counts["context"] += 1
            elif kind == "na":
                row["n_na"] += 1
                counts["na"] += 1

            unclear = bool(response.get("unclear"))
            duplicate = bool(response.get("duplicate"))
            issue_any = unclear or duplicate or kind in {"context", "na"}

            if unclear:
                row["n_unclear"] += 1
                counts["unclear"] += 1
            if duplicate:
                row["n_duplicate"] += 1
                counts["duplicate"] += 1
            if issue_any:
                row["n_issue_any"] += 1
                counts["issue_any"] += 1

            value_ms = safe_ms(timing.get(item_id))
            if value_ms is not None:
                row["timing_ms"].append(value_ms)
                position = position_by_item.get(item_id)
                if position:
                    block_timing[block_for_position(position, total)].append(value_ms)

        active_ms = sum(v for v in (safe_ms(x) for x in timing.values()) if v is not None)
        break_ms = sum(
            v
            for v in (safe_ms(entry.get("durationMs")) for entry in data.get("breaks", []) or [])
            if v is not None
        )
        context = data.get("pilotContext", {}) or {}

        session_summaries.append(
            {
                "file": path.name,
                "version": data.get("version", ""),
                "completed": bool(data.get("completedAt")),
                "answered": len(responses),
                "role": context.get("role") or "—",
                "experience": context.get("experience") or "—",
                "environment": context.get("environment") or "—",
                "active_s": active_ms / 1000,
                "break_s": break_ms / 1000,
                **counts,
            }
        )

    print("\nSESSION SUMMARY")
    print(
        "file\tversion\tanswered\tscale\tcontext\tNA\tunclear\tduplicate\t"
        "active_s\tbreak_s\trole\texperience\tenvironment\tcompleted"
    )
    for row in session_summaries:
        print(
            f"{row['file']}\t{row['version']}\t{row['answered']}\t{row['scale']}\t"
            f"{row['context']}\t{row['na']}\t{row['unclear']}\t{row['duplicate']}\t"
            f"{row['active_s']:.0f}\t{row['break_s']:.0f}\t{row['role']}\t"
            f"{row['experience']}\t{row['environment']}\t{row['completed']}"
        )

    print("\nITEM SUMMARY")
    print(
        "item\taxis\tn\tcontext%\tNA%\tunclear%\tduplicate%\tissue_any%\t"
        "left%\tcenter%\tright%\tmedian_ms"
    )

    axis_acc: dict[str, dict[str, Any]] = defaultdict(
        lambda: {
            "items": set(),
            "n_seen": 0,
            "n_context": 0,
            "n_na": 0,
            "n_unclear": 0,
            "n_duplicate": 0,
            "n_issue_any": 0,
            "scale_counts": Counter(),
            "timing_ms": [],
        }
    )

    for item_id in sorted(item_rows):
        row = item_rows[item_id]
        n = row["n_seen"]
        axis = axis_by_item.get(item_id, "unknown")
        scale_n = row["n_scale"]
        left = row["scale_counts"][1] + row["scale_counts"][2]
        center = row["scale_counts"][3]
        right = row["scale_counts"][4] + row["scale_counts"][5]

        print(
            f"{item_id}\t{axis}\t{n}\t{pct(row['n_context'], n):.1f}\t"
            f"{pct(row['n_na'], n):.1f}\t{pct(row['n_unclear'], n):.1f}\t"
            f"{pct(row['n_duplicate'], n):.1f}\t{pct(row['n_issue_any'], n):.1f}\t"
            f"{pct(left, scale_n):.1f}\t{pct(center, scale_n):.1f}\t"
            f"{pct(right, scale_n):.1f}\t{fmt(median(row['timing_ms']), 0)}"
        )

        acc = axis_acc[axis]
        acc["items"].add(item_id)
        for key in ("n_seen", "n_context", "n_na", "n_unclear", "n_duplicate", "n_issue_any"):
            acc[key] += row[key]
        acc["scale_counts"].update(row["scale_counts"])
        acc["timing_ms"].extend(row["timing_ms"])

    print("\nAXIS AGGREGATE (COGNITIVE SIGNALS ONLY — NOT SCORES)")
    print(
        "axis\titems\tn\tcontext%\tNA%\tunclear%\tduplicate%\tissue_any%\t"
        "left%\tcenter%\tright%\tmedian_ms"
    )
    for axis in sorted(axis_acc):
        row = axis_acc[axis]
        n = row["n_seen"]
        scale_n = sum(row["scale_counts"].values())
        left = row["scale_counts"][1] + row["scale_counts"][2]
        center = row["scale_counts"][3]
        right = row["scale_counts"][4] + row["scale_counts"][5]
        print(
            f"{axis}\t{len(row['items'])}\t{n}\t{pct(row['n_context'], n):.1f}\t"
            f"{pct(row['n_na'], n):.1f}\t{pct(row['n_unclear'], n):.1f}\t"
            f"{pct(row['n_duplicate'], n):.1f}\t{pct(row['n_issue_any'], n):.1f}\t"
            f"{pct(left, scale_n):.1f}\t{pct(center, scale_n):.1f}\t"
            f"{pct(right, scale_n):.1f}\t{fmt(median(row['timing_ms']), 0)}"
        )

    print("\nBLOCK TIMING")
    print("block\tn_responses\tmedian_ms\tmean_ms")
    for block in sorted(block_timing):
        values = block_timing[block]
        print(f"{block}\t{len(values)}\t{fmt(median(values), 0)}\t{fmt(mean(values), 0)}")

    print("\nREVIEW PRIORITY")
    print("Items with any cognitive issue signal in >= 25% of observed sessions:")
    flagged: list[tuple[float, str, str]] = []
    for item_id, row in item_rows.items():
        n = row["n_seen"]
        if not n:
            continue
        issue_rate = pct(row["n_issue_any"], n)
        if issue_rate >= 25.0:
            flagged.append((issue_rate, item_id, axis_by_item.get(item_id, "unknown")))

    if not flagged:
        print("(none)")
    else:
        for issue_rate, item_id, axis in sorted(flagged, reverse=True):
            stem = text_by_item.get(item_id, "")
            suffix = f" — {stem}" if stem else ""
            print(f"{item_id}\t{axis}\t{issue_rate:.1f}%{suffix}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
