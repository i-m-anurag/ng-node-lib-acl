/** Array manipulation utilities */
export declare function chunk<T>(arr: T[], size: number): T[][];
export declare function unique<T>(arr: T[]): T[];
export declare function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]>;
export declare function flatten<T>(arr: (T | T[])[]): T[];
//# sourceMappingURL=array.helper.d.ts.map