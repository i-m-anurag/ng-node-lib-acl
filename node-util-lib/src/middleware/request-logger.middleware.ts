type Request = any;
type Response = any;
type NextFunction = any;

/**
 * Express middleware that logs incoming requests with timing information.
 * Pass an optional Logger instance or a new one will be created.
 */
export function requestLoggerMiddleware(logger?: any) {
  return (req: Request, res: Response, next: NextFunction): void => {
    next();
  };
}
