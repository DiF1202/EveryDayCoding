type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false)

type RemoveItem<Arr extends unknown[], Item, Result extends unknown[] = []> =
  Arr extends [infer First, ...infer Rest] ?
  IsEqual<First, Item> extends true ?
  RemoveItem<Rest, Item, Result> :
  RemoveItem<Rest, Item, [...Result, First]>
  : Result

type demo = RemoveItem<[1, 2, 3, 3], 3>