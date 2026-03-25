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
export declare function corsMiddleware(options?: CorsOptions): (req: Request, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=cors.middleware.d.ts.map