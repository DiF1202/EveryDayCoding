type TestUnion<A, B = A> = A extends A ? { a: A, b: B } : never;

// 因为条件类型中如果左边的类型是联合类型，会把每个元素单独传入做计算，而右边不会。
type TestUnionResult = TestUnion<'a' | 'b' | 'c'>;

// 所以 A 是 'a' 的时候，B 是 'a' | 'b' | 'c'， A 是 'b' 的时候，B 是 'a' | 'b' | 'c'。。。
type isUnion<A, B = A> =
  A extends A ?
  [B] extends [A] ? false : true : never
type demo = isUnion<'a' | 'b'>

// 类型参数 A、B 是待判断的联合类型，B 默认值为 A，也就是同一个类型。
// A extends A 这段看似没啥意义，主要是为了触发分布式条件类型，让 A 的每个类型单独传入。
// [B] extends [A] 这样不直接写 B 就可以避免触发分布式条件类型，那么 B 就是整个联合类型。
// B 是联合类型整体，而 A 是单个类型，自然不成立，而其它类型没有这种特殊处理，A 和 B 都是同一个，怎么判断都成立。
// 利用这个特点就可以判断出是否是联合类型。