import { ConfigOptions, ConfigSource } from '../types/config.types';

/**
 * Type-safe configuration loader supporting environment variables, JSON files, and defaults.
 * Loads in order: defaults -> file -> env vars (env vars win).
 */
export class ConfigLoader<T extends Record<string, unknown>> {
  private config: T;
  private options: ConfigOptions;

  constructor(options?: ConfigOptions) {
    this.options = options ?? {};
    this.config = (options?.defaults ?? {}) as T;
  }

  /** Load configuration from all sources */
  load(): T {
    // TODO: Implement
    return this.config;
  }

  /** Get a configuration value by key */
  get<K extends keyof T>(key: K): T[K] {
    return this.config[key];
  }

  /** Get all configuration */
  getAll(): T {
    return { ...this.config };
  }

  /** Validate that all required keys are present */
  validate(): boolean {
    // TODO: Implement
    return true;
  }
}
