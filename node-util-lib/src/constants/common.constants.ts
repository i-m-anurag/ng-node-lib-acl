/** Application-wide default constants */
export const DEFAULTS = {
  PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  MAX_RETRY_ATTEMPTS: 3,
  RETRY_DELAY_MS: 1000,
  DEFAULT_TIMEOUT_MS: 30000,
  TOKEN_EXPIRY_HOURS: 24,
  BCRYPT_ROUNDS: 12,
} as const;
