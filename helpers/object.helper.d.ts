/** Object manipulation utilities */
export declare function deepClone<T>(obj: T): T;
export declare function deepMerge<T extends Record<string, unknown>>(...objects: Partial<T>[]): T;
export declare function pick<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
export declare function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
//# sourceMappingURL=object.helper.d.ts.map