type useInfer<T extends unknown[]> = T extends [infer A, ...infer B] ? A : never

type res = useInfer<['aa', 2, 3]>