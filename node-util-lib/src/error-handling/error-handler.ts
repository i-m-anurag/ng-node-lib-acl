import { AppError } from './app-error';

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
export class ErrorHandler {
  private includeStack: boolean;

  constructor(options?: { includeStack?: boolean }) {
    this.includeStack = options?.includeStack ?? false;
  }

  /** Convert any error to a standardized ErrorResponse */
  handle(error: Error): ErrorResponse {
    // TODO: Implement
    return { success: false, code: 'UNKNOWN', message: error.message };
  }

  /** Determine the HTTP status code for an error */
  getStatusCode(error: Error): number {
    // TODO: Implement
    return 500;
  }

  /** Check if an error is operational (expected) vs programmer error */
  isOperational(error: Error): boolean {
    // TODO: Implement
    return false;
  }
}
