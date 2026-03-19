/** Configuration-related types */

export interface ConfigOptions {
  envPrefix?: string;
  configFile?: string;
  defaults?: Record<string, unknown>;
  required?: string[];
}

export type ConfigSource = 'env' | 'file' | 'default';

export interface ConfigEntry {
  key: string;
  value: unknown;
  source: ConfigSource;
}
