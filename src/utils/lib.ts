import {
  identity,
} from 'remeda';

/**
 * See https://ramdajs.com/docs/#pickBy
 */
export function pickBy<T extends {}>(
  test: (
    arg0: T[Extract<keyof T, string>],
    arg1: Extract<keyof T, string>,
    arg2: T
  ) => any,
  obj: T
): Partial<T> {
  let result: Partial<T> = {};
  for (let prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
}

/**
 * Removes null or undefined entries in object
 */
export function noNil<T extends {}>(obj: T): Partial<T> {
  return pickBy<T>(identity, obj);
}