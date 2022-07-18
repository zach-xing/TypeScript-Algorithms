function initCallbacks(callbacks: any = {}) {
  const initiatedCallbacks: any = {};

  const stubCallback = () => {};
  const defaultAllowTraversalCallback = () => true;

  initiatedCallbacks.allowTraversal =
    callbacks.allowTraversal || defaultAllowTraversalCallback;
  initiatedCallbacks.enterNode = callbacks.enterNode || stubCallback;
  initiatedCallbacks.leaveNode = callbacks.leaveNode || stubCallback;

  return initiatedCallbacks;
}

export function depthFirstSearchRecursive(node: any, callbacks: any) {
  callbacks.enterNode(node);

  if (node.left && callbacks.allowTraversal(node, node.left)) {
    depthFirstSearchRecursive(node.left, callbacks);
  }

  if (node.right && callbacks.allowTraversal(node, node.right)) {
    depthFirstSearchRecursive(node.right, callbacks);
  }

  callbacks.leaveNode(node);
}

/**
 * DFS 深度优先遍历
 * @param rootNode
 * @param callbacks
 */
export default function depthFirstSearch(rootNode: any, callbacks: any) {
  const cb = initCallbacks(callbacks);

  depthFirstSearchRecursive(rootNode, cb);
}
