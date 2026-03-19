/** Validation-related types */

export interface ValidationSchema {
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string;
  properties?: Record<string, ValidationSchema>;
  items?: ValidationSchema;
}

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors: FieldValidationError[];
}

export interface FieldValidationError {
  field: string;
  message: string;
  rule: string;
}
