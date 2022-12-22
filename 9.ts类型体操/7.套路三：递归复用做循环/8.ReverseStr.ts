type ReverseStr<Str extends string, Result extends string = ''>
  = Str extends `${infer First}${infer Rest}` ?
  ReverseStr<Rest, `${First}${Result}`>
  : Result

type demo = ReverseStr<'hello'>