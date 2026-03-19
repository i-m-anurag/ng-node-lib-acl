import { JwtPayload, JwtSignOptions } from './auth.types';

/**
 * JWT token signing, verification, and decoding utilities.
 * TODO: Wrap jsonwebtoken or jose library with consistent error handling.
 */
export class JwtHelper {
  /** Sign a payload and return a JWT string */
  static sign(
    _payload: Record<string, unknown>,
    _secret: string,
    _options?: JwtSignOptions,
  ): string {
    // TODO: Implement with jsonwebtoken or jose
    throw new Error('Not implemented — install jsonwebtoken and implement');
  }

  /** Verify a JWT and return the decoded payload */
  static verify(_token: string, _secret: string): JwtPayload {
    // TODO: Implement with jsonwebtoken or jose
    throw new Error('Not implemented — install jsonwebtoken and implement');
  }

  /** Decode a JWT without verification (for inspection only) */
  static decode(_token: string): JwtPayload | null {
    // TODO: Implement with jsonwebtoken or jose
    throw new Error('Not implemented — install jsonwebtoken and implement');
  }
}
