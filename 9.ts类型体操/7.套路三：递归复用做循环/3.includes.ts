type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false)

type Includes<Arr extends unknown[], Item> =
  Arr extends [infer First, ...infer Rest] ?
  IsEqual<First, Item> extends true ? true :
  Includes<Rest, Item>
  : false

type demo = Includes<[1, 2, 3], 3>