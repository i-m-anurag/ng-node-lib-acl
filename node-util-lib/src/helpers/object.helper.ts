/** Object manipulation utilities */

export function deepClone<T>(obj: T): T {
  // TODO: Implement
  return {} as T;
}

export function deepMerge<T extends Record<string, unknown>>(...objects: Partial<T>[]): T {
  // TODO: Implement
  return {} as T;
}

export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> {
  // TODO: Implement
  return {} as Pick<T, K>;
}

export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  // TODO: Implement
  return {} as Omit<T, K>;
}
