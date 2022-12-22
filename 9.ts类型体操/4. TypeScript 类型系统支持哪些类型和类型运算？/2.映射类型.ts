// type MapType<T> = {
//   [Key in keyof T]: [T[Key], T[Key], T[Key]]
// }

type MapType<T> = {
  [
  Key in keyof T
  as `${Key & string}${Key & string}${Key & string}`
  ]: [T[Key], T[Key], T[Key]]
}

type res = MapType<{ a: 1, b: 2 }>;
