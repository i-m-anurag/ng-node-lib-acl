import { LoggerOptions } from './logger.types';
/**
 * Structured logger with configurable level and prefix.
 * In production, replace console transport with Winston/Pino.
 */
export declare class Logger {
    private level;
    private prefix;
    private showTimestamp;
    constructor(options?: LoggerOptions);
    /** Create a new Logger instance */
    static create(options?: LoggerOptions): Logger;
    /** Create a child logger with a prefix */
    child(prefix: string): Logger;
    debug(message: string, meta?: Record<string, unknown>): void;
    info(message: string, meta?: Record<string, unknown>): void;
    warn(message: string, meta?: Record<string, unknown>): void;
    error(message: string, meta?: Record<string, unknown>): void;
}
//# sourceMappingURL=logger.d.ts.map