// 初级relace只能替换一次 那要如何实现替换所有的
type ReplaceStr<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}` : Str;

type ReplaceAll<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${ReplaceAll<Suffix, From, To>}` : Str

type demo = ReplaceAll<'aaabbb', 'b', 'c'>
type dem2 = ReplaceStr<'aaabbb', 'b', 'c'>

export { }