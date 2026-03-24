/**
 * See https://ramdajs.com/docs/#pickBy
 */
export function pickBy<T extends object>(
  test: (
    value: T[keyof T],
    key: keyof T & string,
    obj: T,
  ) => boolean,
  obj: T,
): Partial<T> {
  const result: Partial<T> = {};
  for (const prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
}

/**
 * Removes null or undefined entries in object
 */
export function noNil<T extends object>(obj: T): Partial<T> {
  return pickBy<T>((value) => value != null, obj);
}

export function calculateReadingTime(num: number) {
  return Math.ceil(num / 200);
}
