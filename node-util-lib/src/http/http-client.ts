import { RequestOptions, HttpResponse, HttpInterceptor } from '../types/http.types';

/**
 * Type-safe HTTP client wrapper with retry, timeout, and interceptor support.
 * TODO: Implement with node-fetch or undici for production.
 */
export class HttpClient {
  private baseUrl: string;
  private defaultOptions: RequestOptions;
  private interceptors: HttpInterceptor[] = [];

  constructor(baseUrl = '', defaultOptions?: RequestOptions) {
    this.baseUrl = baseUrl;
    this.defaultOptions = defaultOptions ?? {};
  }

  /** Add a request/response interceptor */
  addInterceptor(interceptor: HttpInterceptor): void {
    this.interceptors.push(interceptor);
  }

  /** Perform a GET request */
  async get<T>(_url: string, _options?: RequestOptions): Promise<HttpResponse<T>> {
    // TODO: Implement HTTP GET
    throw new Error('Not implemented');
  }

  /** Perform a POST request */
  async post<T>(
    _url: string,
    _body?: unknown,
    _options?: RequestOptions,
  ): Promise<HttpResponse<T>> {
    // TODO: Implement HTTP POST
    throw new Error('Not implemented');
  }

  /** Perform a PUT request */
  async put<T>(
    _url: string,
    _body?: unknown,
    _options?: RequestOptions,
  ): Promise<HttpResponse<T>> {
    // TODO: Implement HTTP PUT
    throw new Error('Not implemented');
  }

  /** Perform a DELETE request */
  async delete<T>(_url: string, _options?: RequestOptions): Promise<HttpResponse<T>> {
    // TODO: Implement HTTP DELETE
    throw new Error('Not implemented');
  }
}
