PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS pilot_sessions (
  session_id TEXT PRIMARY KEY,
  bank_version TEXT NOT NULL,
  engine_version TEXT NOT NULL,
  ui_version TEXT,
  started_at TEXT NOT NULL,
  completed_at TEXT,
  device_type TEXT,
  locale TEXT,
  completed INTEGER NOT NULL DEFAULT 0,
  ad_count INTEGER,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pilot_responses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  question_position INTEGER NOT NULL,
  shown_option_order_json TEXT NOT NULL,
  selected_option_id TEXT NOT NULL,
  direction TEXT NOT NULL CHECK (direction IN ('TM','LB','CH','DM','IN','AD')),
  response_time_ms INTEGER NOT NULL,
  answered_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(session_id, question_id),
  FOREIGN KEY(session_id) REFERENCES pilot_sessions(session_id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_mp_response_session ON pilot_responses(session_id);
CREATE INDEX IF NOT EXISTS idx_mp_response_question ON pilot_responses(question_id);
CREATE INDEX IF NOT EXISTS idx_mp_response_direction ON pilot_responses(direction);

CREATE TABLE IF NOT EXISTS pilot_results (
  session_id TEXT PRIMARY KEY,
  tm_count INTEGER NOT NULL DEFAULT 0,
  lb_count INTEGER NOT NULL DEFAULT 0,
  ch_count INTEGER NOT NULL DEFAULT 0,
  dm_count INTEGER NOT NULL DEFAULT 0,
  in_count INTEGER NOT NULL DEFAULT 0,
  multiplier_count INTEGER NOT NULL DEFAULT 0,
  ad_count INTEGER NOT NULL DEFAULT 0,
  risk_counts_json TEXT NOT NULL DEFAULT '{}',
  pattern_json TEXT NOT NULL DEFAULT '{}',
  reflection_question_ids_json TEXT NOT NULL DEFAULT '[]',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(session_id) REFERENCES pilot_sessions(session_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS pilot_feedback (
  session_id TEXT PRIMARY KEY,
  answered_realistically TEXT NOT NULL CHECK (answered_realistically IN ('yes','mostly','no')),
  noticed_different_options TEXT NOT NULL CHECK (noticed_different_options IN ('yes','no','unsure')),
  result_prompted_reflection TEXT NOT NULL CHECK (result_prompted_reflection IN ('yes','no','unsure')),
  comment TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(session_id) REFERENCES pilot_sessions(session_id) ON DELETE CASCADE
);