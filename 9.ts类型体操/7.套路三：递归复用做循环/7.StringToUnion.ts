// 我们想把字符串字面量类型的每个字符都提取出来组成联合类型，
// 也就是把 'dong' 转为 'd' | 'o' | 'n' | 'g'。
type StringToUnion<Str extends string> =
  Str extends `${infer First}${infer Rest}` ?
  First | StringToUnion<Rest> : never

type demo = StringToUnion<'DONG'>