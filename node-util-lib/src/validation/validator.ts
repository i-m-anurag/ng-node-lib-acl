import { ValidationSchema, ValidationResult } from './validation.types';

/**
 * Schema-based validation engine.
 * TODO: Wrap Zod or Joi under a unified API for production use.
 */
export class Validator {
  /** Validate data against a schema */
  validate<T>(_data: unknown, _schema: ValidationSchema): ValidationResult<T> {
    // TODO: Implement validation logic
    return { success: true, data: _data as T, errors: [] };
  }

  /** Quick check: is the value a valid email */
  static isEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  /** Quick check: is the value a valid URL */
  static isUrl(value: string): boolean {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  /** Quick check: is the value a non-empty string */
  static isNonEmpty(value: unknown): boolean {
    return typeof value === 'string' && value.trim().length > 0;
  }
}
