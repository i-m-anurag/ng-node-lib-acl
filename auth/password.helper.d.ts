/**
 * Password hashing and comparison using bcrypt or argon2.
 * TODO: Install bcrypt/argon2 and implement.
 */
export declare class PasswordHelper {
    /** Hash a plaintext password */
    static hash(_password: string, _rounds?: number): Promise<string>;
    /** Compare a plaintext password against a hash */
    static compare(_password: string, _hash: string): Promise<boolean>;
}
//# sourceMappingURL=password.helper.d.ts.map