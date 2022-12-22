// type arr = [1,2,3,4,5];
// 反过来变成
// type arr = [5,4,3,2,1];
type ReverseArr<Arr extends unknown[]> =
  Arr extends [infer One, infer Two, infer Three, infer Four, infer Five] ?
  [Five, Four, Three, Two, One] : never;
// 那如果不限制数组长度呢？

type ReverseArr2<Arr extends unknown[]> =
  Arr extends [infer First, ...infer Rest] ?
  [...ReverseArr2<Rest>, First] : Arr

type demo = ReverseArr2<[1, 2, 3]>