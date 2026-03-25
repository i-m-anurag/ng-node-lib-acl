import { ValidationSchema, ValidationResult } from './validation.types';
/**
 * Schema-based validation engine.
 * TODO: Wrap Zod or Joi under a unified API for production use.
 */
export declare class Validator {
    /** Validate data against a schema */
    validate<T>(_data: unknown, _schema: ValidationSchema): ValidationResult<T>;
    /** Quick check: is the value a valid email */
    static isEmail(value: string): boolean;
    /** Quick check: is the value a valid URL */
    static isUrl(value: string): boolean;
    /** Quick check: is the value a non-empty string */
    static isNonEmpty(value: unknown): boolean;
}
//# sourceMappingURL=validator.d.ts.map