import { RequestOptions, HttpResponse, HttpInterceptor } from '../types/http.types';
/**
 * Type-safe HTTP client wrapper with retry, timeout, and interceptor support.
 * TODO: Implement with node-fetch or undici for production.
 */
export declare class HttpClient {
    private baseUrl;
    private defaultOptions;
    private interceptors;
    constructor(baseUrl?: string, defaultOptions?: RequestOptions);
    /** Add a request/response interceptor */
    addInterceptor(interceptor: HttpInterceptor): void;
    /** Perform a GET request */
    get<T>(_url: string, _options?: RequestOptions): Promise<HttpResponse<T>>;
    /** Perform a POST request */
    post<T>(_url: string, _body?: unknown, _options?: RequestOptions): Promise<HttpResponse<T>>;
    /** Perform a PUT request */
    put<T>(_url: string, _body?: unknown, _options?: RequestOptions): Promise<HttpResponse<T>>;
    /** Perform a DELETE request */
    delete<T>(_url: string, _options?: RequestOptions): Promise<HttpResponse<T>>;
}
//# sourceMappingURL=http-client.d.ts.map