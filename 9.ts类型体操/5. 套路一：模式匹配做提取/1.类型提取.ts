type p = Promise<'guang'>

type GetValueType<P> = P extends Promise<infer Value> ? Value : never