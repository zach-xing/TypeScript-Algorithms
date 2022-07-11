/**
 * 比较工具类
 */
export default class Comparator {
  compare: Function;

  constructor(compareFunction?: Function) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * 默认的比较函数
   */
  static defaultCompareFunction(a: any, b: any) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }

  /**
   * 检查两个值是否相等
   * @param a any
   * @param b any
   */
  equals(a: any, b: any) {
    return this.compare(a, b) === 0;
  }

  /**
   * 检查是否 "a" < "b"
   */
  lessThan(a: any, b: any) {
    return this.compare(a, b) < 0;
  }

  /**
   * 检查是否 "a" > "b"
   */
  greaterThan(a: any, b: any) {
    return this.compare(a, b) > 0;
  }

  lessThanOrEqual(a: any, b: any) {
    return this.lessThan(a, b) || this.equals(a, b);
  }

  /**
   * Checks if variable "a" is greater than or equal to "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThanOrEqual(a: any, b: any) {
    return this.greaterThan(a, b) || this.equals(a, b);
  }

  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a: any, b: any) => compareOriginal(b, a);
  }
}
