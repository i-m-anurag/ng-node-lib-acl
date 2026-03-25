type Request = any;
type Response = any;
type NextFunction = any;
/**
 * Express middleware that logs incoming requests with timing information.
 * Pass an optional Logger instance or a new one will be created.
 */
export declare function requestLoggerMiddleware(logger?: any): (req: Request, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=request-logger.middleware.d.ts.map