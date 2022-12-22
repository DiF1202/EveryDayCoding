// 求字符串长度
type StrLen<
  Str extends string,
  CountArr extends unknown[] = []
> = Str extends `${string}${infer Rest}` ?
  StrLen<Rest, [unknown, ...CountArr]>
  : CountArr['length']

type demo = StrLen<'aaaa'>

export { }