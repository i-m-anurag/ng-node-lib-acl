/** Standardized error response shape */
export interface ErrorResponse {
    success: false;
    code: string;
    message: string;
    details?: unknown;
    stack?: string;
}
/**
 * Central error handler that converts errors to standardized response format.
 * Use this in your application's global error handler.
 */
export declare class ErrorHandler {
    private includeStack;
    constructor(options?: {
        includeStack?: boolean;
    });
    /** Convert any error to a standardized ErrorResponse */
    handle(error: Error): ErrorResponse;
    /** Determine the HTTP status code for an error */
    getStatusCode(error: Error): number;
    /** Check if an error is operational (expected) vs programmer error */
    isOperational(error: Error): boolean;
}
//# sourceMappingURL=error-handler.d.ts.map