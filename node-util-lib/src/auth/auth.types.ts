/** Authentication-related types */

export interface JwtPayload {
  sub: string;
  iat: number;
  exp: number;
  [key: string]: unknown;
}

export interface JwtSignOptions {
  expiresIn?: string | number;
  algorithm?: string;
  issuer?: string;
  audience?: string;
}

export interface AuthUser {
  id: string;
  username: string;
  email: string;
  roles: string[];
}
