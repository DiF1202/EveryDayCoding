type ReplaceStr<Str extends string, From extends string, To extends string> =
  Str extends `${infer Prefix}${From}${infer Suffix}` ?
  `${Prefix}${To}${Suffix}` : Str


type test = ReplaceStr<'abc', 'a', 'z'>