import { ValidationSchema } from './validation.types';
/** Pre-built schema factories for common validation patterns */
export declare function createStringSchema(options?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
}): ValidationSchema;
export declare function createNumberSchema(options?: {
    required?: boolean;
    min?: number;
    max?: number;
}): ValidationSchema;
export declare function createObjectSchema(properties: Record<string, ValidationSchema>, required?: boolean): ValidationSchema;
//# sourceMappingURL=schemas.d.ts.map