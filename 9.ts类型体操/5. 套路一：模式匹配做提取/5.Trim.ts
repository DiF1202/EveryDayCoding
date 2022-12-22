type TrimRight<Str extends string> =
  Str extends `${infer Rest}${' ' | '\n' | '\t'}` ?
  TrimRight<Rest> : Str

type LeftTrim<Str extends string> =
  Str extends `${' ' | '\n' | '\t'}${infer Rest}` ?
  LeftTrim<Rest> : Str

type Trim<Str extends string> = LeftTrim<TrimRight<Str>>

type Test = TrimRight<'tesst     '>
type Test1 = LeftTrim<'   tesst  '>
type test2 = Trim<'   tesst  '>

