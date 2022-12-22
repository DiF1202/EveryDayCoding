// 1.Mapping
// 简单映射
type Mapping<Obj extends object> = {
  [Key in keyof Obj]: [Obj[Key], Obj[Key], Obj[Key]]
}
type demo = Mapping<{ a: 1 }>

// 2.UppercaseKey
// type UppercaseKey<Obj extends object> = {
//   [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
// }
type UppercaseKey<Obj extends Record<string, any>> = {
  [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
}
const number: number = 1

type demo2 = UppercaseKey<{ a: 1, B: 1, number: 1 }>

// 3.ToReadonly
type ToReadonly<T> = {
  readonly [Key in keyof T]: T[Key]
}

// 4.ToPartial
// 索引类型还可以添加可选修饰符
type ToPartial<T> = {
  [Key in keyof T]?: T[Key]
}

// 5.ToMutable
// 可以添加 readonly 修饰，当然也可以去掉：
type ToMutable<T> = {
  -readonly [Key in keyof T]: T[Key]
}

// 6.ToRequired
type ToRequired<T> = {
  [Key in keyof T]-?: T[Key]
}

// 7.FilterByValueType
type FilterByValueType<Obj extends Record<string, any>, ValueType> = {
  [Key in keyof Obj as Obj[Key] extends ValueType ? Key : never]: Obj[Key]
}

interface Person {
  name: string;
  age: number;
  hobby: string[];
}

type demon = FilterByValueType<Person, string | number>

