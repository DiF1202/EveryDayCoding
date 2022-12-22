type tuple = [1, 2, 3]
// push
type Push<Arr extends unknown[], ele> = [...Arr, ele]

type test = Push<[1, 2, 3], '4'>

// unshift
type Unshift<Arr extends unknown[], ele> = [ele, ...Arr]

// zip
type Zip<One extends [unknown, unknown], Two extends [unknown, unknown]> =
  One extends [infer A, infer B] ?
  Two extends [infer C, infer D] ?
  [[A, B], [C, D]] : []
  : []

type test2 = Zip<[1, 2], [3, 4]>