// 判断字符串是否以某个前缀开头，也是通过模式匹配：
type StartWith<Str extends string, PreFix extends string> =
  Str extends `${PreFix}${string}` ? true : false


type test = StartWith<'abc', 'ab'>