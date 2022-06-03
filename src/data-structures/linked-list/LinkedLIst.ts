import LinkedListNode from "./LinkedListNode";
import Comparator from "../utils/Comparator";

export default class LinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  compare: Comparator;

  constructor(compareFunction?: Function) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(compareFunction);
  }

  prepend(value: any) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  append(value: any) {
    const newNode = new LinkedListNode(value);
    // 若 head=null，则就直接赋值给 head
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail!.next = newNode;
    this.tail = newNode;
    return this;
  }

  insert(value: any, rawIndex: number) {
    const index = rawIndex < 0 ? 0 : rawIndex;
    if (index === 0) {
      this.prepend(value);
    } else {
      let count = 1;
      let curNode = this.head;
      const newNode = new LinkedListNode(value);
      while (curNode) {
        if (count === index) break;
        curNode = curNode.next;
        count += 1;
      }
      if (curNode) {
        newNode.next = curNode.next;
        curNode.next = newNode;
      } else {
        // 根据 tail 是否存在插入
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
  }

  delete(value: any) {
    if (!this.head) {
      return null;
    }
    let deleteNode = null;
    // 若 head 被删除则需要下一个不同的节点作为 new head
    while (this.head && this.compare.equals(this.head.value, value)) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    let curNode = this.head;
    if (curNode !== null) {
      while (curNode.next) {
        if (this.compare.equals(curNode.next.value, value)) {
          deleteNode = curNode.next;
          curNode.next = curNode.next.next;
        } else {
          curNode = curNode?.next;
        }
      }
    }

    // 检查 tail 是否需删除
    if (this.tail && this.compare.equals(this.tail.value, value)) {
      this.tail = curNode;
    }

    return deleteNode;
  }

  find(node: { value?: any; callback?: Function }) {
    if (!this.head) {
      return null;
    }
    let curNode: LinkedListNode | null = this.head;
    while (curNode) {
      // 若指定了 callback，则会通过 callback 尝试找到它
      if (node.callback && node.callback(curNode.value)) {
        return curNode;
      }

      // 若指定了 value， 则会通过 value 尝试找到它
      if (
        node.value !== undefined &&
        this.compare.equals(curNode.value, node.value)
      ) {
        return curNode;
      }

      curNode = curNode.next;
    }
    return null;
  }

  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      // 若只有一个节点的情况下
      this.head = null;
      this.tail = null;
    }

    let curNode = this.head;
    while (curNode && curNode.next) {
      if (!curNode.next.next) {
        curNode.next = null;
      } else {
        curNode = curNode.next;
      }
    }

    this.tail = curNode;
    return deletedTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  fromArray(values: Array<any>) {
    values.forEach((value) => this.append(value));
    return this;
  }

  toArray() {
    const nodes = [];
    let curNode = this.head;
    while (curNode) {
      nodes.push(curNode);
      curNode = curNode.next;
    }
    return nodes;
  }

  toString(callback?: Function) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  reverse() {
    let curNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (curNode) {
      nextNode = curNode.next;
      curNode.next = prevNode;

      prevNode = curNode;
      curNode = nextNode;
    }
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
