CREATE TABLE IF NOT EXISTS workstyle_sessions (
  session_id TEXT PRIMARY KEY,
  received_at TEXT NOT NULL,
  version TEXT NOT NULL,
  language TEXT NOT NULL,
  completed_at TEXT,
  answered INTEGER NOT NULL DEFAULT 0,
  active_ms INTEGER NOT NULL DEFAULT 0,
  break_ms INTEGER NOT NULL DEFAULT 0,
  role TEXT,
  experience TEXT,
  environment TEXT,
  unclear_count INTEGER NOT NULL DEFAULT 0,
  duplicate_count INTEGER NOT NULL DEFAULT 0,
  context_count INTEGER NOT NULL DEFAULT 0,
  na_count INTEGER NOT NULL DEFAULT 0,
  payload_json TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_workstyle_received_at
  ON workstyle_sessions(received_at);

CREATE INDEX IF NOT EXISTS idx_workstyle_version
  ON workstyle_sessions(version);
