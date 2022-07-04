import Comparator from "../../../utils/Comparator";

export default function linearSearch(
  array: any[],
  seekElement: any,
  comparatorCallback?: Function
) {
  const compare =
    comparatorCallback !== undefined
      ? new Comparator(comparatorCallback)
      : new Comparator();

  const resArr: number[] = [];
  array.forEach((item, idx) => {
    if (compare.equals(item, seekElement)) {
      resArr.push(idx);
    }
  });

  return resArr;
}
