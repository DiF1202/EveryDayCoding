// 1.把首字母改大写
// 我们想把一个字符串字面量类型的 'guang' 转为首字母大写的 'Guang'。
type CapitalizeStr<Str extends string> =
  Str extends `${infer First}${infer Rest}` ?
  `${Uppercase<First>}${Rest}` : Str

type test = CapitalizeStr<'guang'>

// 2.CamelCase驼峰命名转化法
// 我们再来实现 c 到 dongDongDong 的变换。
type CameLcase<Str extends string> =
  Str extends `${infer Left}_${infer Right}${infer Rest}` ?
  `${Left}${Uppercase<Right>}${CameLcase<Rest>}`
  : Str

type demo = CameLcase<'dong_dong_dong'>

// 3.DropSubStr删除字符串中的某个子串
type DropSubStr<Str extends string, subStr extends string> =
  Str extends `${infer Prefix}${subStr}${infer Suffix}` ?
  DropSubStr<`${Prefix}${Suffix}`, subStr>
  : Str
type demo3 = DropSubStr<'aaabbb', 'b'>