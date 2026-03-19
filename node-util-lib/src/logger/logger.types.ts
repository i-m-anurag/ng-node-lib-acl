/** Logger configuration types */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LoggerOptions {
  level?: LogLevel;
  prefix?: string;
  timestamp?: boolean;
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  prefix?: string;
  meta?: Record<string, unknown>;
}
