// 如果要定义一个对象的 key 和 value 类型该怎么做呢？这时候就需要用到 TS 的 Record 了。

// demo1
interface PageInfo {
  title: string
}
type Page = "home" | 'about' | 'contact'

const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
}

// demo2
type keys = 'A' | 'B' | 'C'
const result: Record<keys, number> = {
  A: 1,
  B: 2,
  C: 3
}

// TypeScript 提供了内置的高级类型 Record 来创建索引类型
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
