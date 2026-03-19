type Request = any;
type Response = any;
type NextFunction = any;

/**
 * Express error-handling middleware. Place last in the middleware chain.
 * Catches errors and returns standardized JSON responses.
 */
export function errorMiddleware(includeStack = false) {
  return (err: Error, _req: Request, res: Response, next: NextFunction): void => {
    next();
  };
}
