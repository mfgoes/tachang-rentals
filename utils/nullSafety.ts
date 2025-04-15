// utils/nullSafety.ts

/**
 * Safely accesses nested properties that might be null/undefined
 */
export const safeGet = <T, R>(obj: T | null | undefined, fn: (obj: T) => R): R | undefined => {
    if (obj == null) {
      return undefined;
    }
    
    try {
      return fn(obj);
    } catch {
      return undefined;
    }
  };
  
  /**
   * Optional chaining with default value for TypeScript
   */
  export const optional = <T>(value: T | null | undefined, defaultValue: T): T => {
    return value ?? defaultValue;
  };