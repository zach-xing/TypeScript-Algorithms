import LinkedList from "../../../data-structures/linked-list/LinkedList";
import traversal from "./traversal";

describe("traversal", () => {
  it("should traverse linked list", () => {
    const linkedList = new LinkedList();

    linkedList.append(1).append(2).append(3);

    const traversedNodeValues: any[] = [];
    const traversalCallback = (nodeValue: any) => {
      traversedNodeValues.push(nodeValue);
    };

    traversal(linkedList, traversalCallback);

    expect(traversedNodeValues).toEqual([1, 2, 3]);
  });
});
