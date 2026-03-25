import { ConfigOptions } from '../types/config.types';
/**
 * Type-safe configuration loader supporting environment variables, JSON files, and defaults.
 * Loads in order: defaults -> file -> env vars (env vars win).
 */
export declare class ConfigLoader<T extends Record<string, unknown>> {
    private config;
    private options;
    constructor(options?: ConfigOptions);
    /** Load configuration from all sources */
    load(): T;
    /** Get a configuration value by key */
    get<K extends keyof T>(key: K): T[K];
    /** Get all configuration */
    getAll(): T;
    /** Validate that all required keys are present */
    validate(): boolean;
}
//# sourceMappingURL=config-loader.d.ts.map