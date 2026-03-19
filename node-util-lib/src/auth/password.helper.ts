/**
 * Password hashing and comparison using bcrypt or argon2.
 * TODO: Install bcrypt/argon2 and implement.
 */
export class PasswordHelper {
  /** Hash a plaintext password */
  static async hash(_password: string, _rounds = 12): Promise<string> {
    // TODO: Implement with bcrypt or argon2
    throw new Error('Not implemented — install bcrypt and implement');
  }

  /** Compare a plaintext password against a hash */
  static async compare(_password: string, _hash: string): Promise<boolean> {
    // TODO: Implement with bcrypt or argon2
    throw new Error('Not implemented — install bcrypt and implement');
  }
}
