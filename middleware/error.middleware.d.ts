type Request = any;
type Response = any;
type NextFunction = any;
/**
 * Express error-handling middleware. Place last in the middleware chain.
 * Catches errors and returns standardized JSON responses.
 */
export declare function errorMiddleware(includeStack?: boolean): (err: Error, _req: Request, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=error.middleware.d.ts.map