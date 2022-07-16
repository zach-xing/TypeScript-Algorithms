import LinkedList from "../../../data-structures/linked-list/LinkedList";
import LinkedListNode from "../../../data-structures/linked-list/LinkedListNode";

function reverseTraversalRecursive(
  node: LinkedListNode | null,
  callback: Function
) {
  if (node) {
    reverseTraversalRecursive(node.next, callback);
    callback(node.value);
  }
}

export default function reverseTraversal(
  linkedList: LinkedList,
  callback: Function
) {
  if (linkedList.head == undefined) {
    return null;
  }
  reverseTraversalRecursive(linkedList.head, callback);
}
