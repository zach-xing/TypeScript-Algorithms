/**
 * LinkedList 的 单个节点
 */
export default class LinkedListNode {
  value: any;
  next: LinkedListNode | null;

  constructor(value: any, next?: LinkedListNode | null) {
    this.value = value;
    this.next = !!next ? next : null;
  }

  toString(callback?: Function): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
