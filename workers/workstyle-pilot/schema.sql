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

CREATE TABLE IF NOT EXISTS site_events (
  event_id TEXT PRIMARY KEY,
  received_at TEXT NOT NULL,
  occurred_at TEXT,
  visit_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  tool_id TEXT NOT NULL,
  page_path TEXT,
  page_host TEXT,
  language TEXT,
  source TEXT,
  medium TEXT,
  campaign TEXT,
  content TEXT,
  referrer_host TEXT,
  metadata_json TEXT NOT NULL DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_site_events_received_at
  ON site_events(received_at);

CREATE INDEX IF NOT EXISTS idx_site_events_type_tool
  ON site_events(event_type, tool_id);

CREATE INDEX IF NOT EXISTS idx_site_events_visit
  ON site_events(visit_id);

CREATE INDEX IF NOT EXISTS idx_site_events_source
  ON site_events(source);

CREATE TABLE IF NOT EXISTS site_feedback (
  feedback_id TEXT PRIMARY KEY,
  received_at TEXT NOT NULL,
  occurred_at TEXT,
  visit_id TEXT NOT NULL,
  tool_id TEXT NOT NULL,
  usefulness TEXT NOT NULL,
  comment TEXT,
  quote_consent INTEGER NOT NULL DEFAULT 0,
  completed_before_feedback INTEGER NOT NULL DEFAULT 0,
  page_path TEXT,
  page_host TEXT,
  language TEXT,
  source TEXT,
  medium TEXT,
  campaign TEXT,
  content TEXT,
  referrer_host TEXT
);

CREATE INDEX IF NOT EXISTS idx_site_feedback_received_at
  ON site_feedback(received_at);

CREATE INDEX IF NOT EXISTS idx_site_feedback_tool
  ON site_feedback(tool_id);

CREATE INDEX IF NOT EXISTS idx_site_feedback_quote_consent
  ON site_feedback(quote_consent);

CREATE TABLE IF NOT EXISTS priolens_stimulus_validation_sessions (
  session_id TEXT PRIMARY KEY,
  received_at TEXT NOT NULL,
  version TEXT NOT NULL,
  pool_version TEXT NOT NULL,
  language TEXT NOT NULL,
  form_index INTEGER NOT NULL,
  started_at TEXT,
  completed_at TEXT NOT NULL,
  response_count INTEGER NOT NULL,
  source TEXT,
  medium TEXT,
  campaign TEXT,
  referrer_host TEXT,
  payload_json TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_priolens_sv_sessions_received
  ON priolens_stimulus_validation_sessions(received_at);

CREATE INDEX IF NOT EXISTS idx_priolens_sv_sessions_language
  ON priolens_stimulus_validation_sessions(language);

CREATE TABLE IF NOT EXISTS priolens_stimulus_validation_responses (
  session_id TEXT NOT NULL,
  stimulus_id TEXT NOT NULL,
  target_family TEXT NOT NULL,
  language TEXT NOT NULL,
  open_text TEXT NOT NULL,
  clarity INTEGER NOT NULL,
  classification TEXT NOT NULL,
  confidence INTEGER NOT NULL,
  valence INTEGER NOT NULL,
  presentation_index INTEGER NOT NULL,
  option_order_json TEXT NOT NULL,
  step1_ms INTEGER NOT NULL DEFAULT 0,
  step2_ms INTEGER NOT NULL DEFAULT 0,
  total_ms INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (session_id, stimulus_id)
);

CREATE INDEX IF NOT EXISTS idx_priolens_sv_response_stimulus
  ON priolens_stimulus_validation_responses(stimulus_id);

CREATE INDEX IF NOT EXISTS idx_priolens_sv_response_target
  ON priolens_stimulus_validation_responses(target_family);

CREATE INDEX IF NOT EXISTS idx_priolens_sv_response_classification
  ON priolens_stimulus_validation_responses(classification);

CREATE INDEX IF NOT EXISTS idx_priolens_sv_response_language
  ON priolens_stimulus_validation_responses(language);

