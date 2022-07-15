import LinkedList from "../../../data-structures/linked-list/LinkedList";

export default function traversal(linkedList: LinkedList, callback: Function) {
  let curNode = linkedList.head;

  while (curNode) {
    callback(curNode.value);
    curNode = curNode.next;
  }
}
