type Combination<A extends string, B extends string> =
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`;

type AllCombinations<A extends string, B extends string = A> =
  A extends A
  ? Combination<A, AllCombinations<Exclude<B, A>>>
  : never;

type demo = AllCombinations<'a' | 'b' | 'c'>


type A = number | string | boolean
type B = number | boolean

type Foo = Exclude<A, B>
// 相当于
// type Foo = string
