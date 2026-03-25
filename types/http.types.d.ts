/** HTTP-related types */
export interface RequestOptions {
    headers?: Record<string, string>;
    timeout?: number;
    retries?: number;
    params?: Record<string, string | number>;
}
export interface HttpResponse<T> {
    data: T;
    status: number;
    headers: Record<string, string>;
    duration: number;
}
export interface HttpInterceptor {
    onRequest?(config: RequestOptions): RequestOptions;
    onResponse?<T>(response: HttpResponse<T>): HttpResponse<T>;
    onError?(error: Error): void;
}
//# sourceMappingURL=http.types.d.ts.map