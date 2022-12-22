// 驼峰命名法转换
type Camelcase<Str extends string> =
  Str extends `${infer Left}_${infer Right}${infer Rest}`
  ? `${Left}${Uppercase<Right>}${Camelcase<Rest>}`
  : Str;

type demo = Camelcase<"dong_dong_dong">

// 传入的是数组
type CamelcaseArr<
  Arr extends unknown[]
> = Arr extends [infer Item, ...infer RestArr]
  ? [Camelcase<Item & string>, ...CamelcaseArr<RestArr>]
  : [];

type demo2 = CamelcaseArr<['dong_dong_dong', 'dong_dong_dong_dong']>

// 传入的是联合类型 其实跟单独的也是一样的
type demo3 = Camelcase<"dong_dong_dong" | "aa_aa_aa">