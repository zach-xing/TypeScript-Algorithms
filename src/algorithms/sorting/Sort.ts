import Comparator from "../../utils/Comparator";

export default class Sort {
  callbacks: any;
  comparator: Comparator;

  constructor(originalCallbacks: any) {
    this.callbacks = Sort.initSortingCallbacks(originalCallbacks);
    this.comparator = new Comparator(this.callbacks.compareCallback);
  }

  static initSortingCallbacks(originalCallbacks: any) {
    const callbacks = originalCallbacks || {};
    const stubCallback = () => {};

    callbacks.compareCallback = callbacks.compareCallback || undefined;
    callbacks.visitingCallback = callbacks.visitingCallback || stubCallback;

    return callbacks;
  }

  // 为了 ts 检测，加入 params: any
  sort(params: any) {
    throw new Error("sort method must be implemented");
  }
}
