/**
 * Application-specific error classes with HTTP status codes and operational flags.
 * Operational errors are expected (e.g., validation failures); programmer errors are not.
 */
export declare class AppError extends Error {
    readonly statusCode: number;
    readonly code: string;
    readonly isOperational: boolean;
    constructor(message: string, statusCode: number, code: string, isOperational?: boolean);
}
export declare class NotFoundError extends AppError {
    constructor(message?: string);
}
export declare class ValidationError extends AppError {
    readonly details: Record<string, string[]>;
    constructor(message?: string, details?: Record<string, string[]>);
}
export declare class UnauthorizedError extends AppError {
    constructor(message?: string);
}
export declare class ForbiddenError extends AppError {
    constructor(message?: string);
}
export declare class ConflictError extends AppError {
    constructor(message?: string);
}
export declare class BadRequestError extends AppError {
    constructor(message?: string);
}
//# sourceMappingURL=app-error.d.ts.map