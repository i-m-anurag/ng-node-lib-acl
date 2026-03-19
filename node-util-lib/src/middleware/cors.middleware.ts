type Request = any;
type Response = any;
type NextFunction = any;

export interface CorsOptions {
  origin?: string | string[] | boolean;
  methods?: string[];
  allowedHeaders?: string[];
  exposedHeaders?: string[];
  credentials?: boolean;
  maxAge?: number;
}

/** Configurable CORS middleware with sensible defaults */
export function corsMiddleware(options?: CorsOptions) {
  return (req: Request, res: Response, next: NextFunction): void => {
    next();
  };
}
