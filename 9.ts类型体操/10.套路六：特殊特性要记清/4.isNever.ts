type IsNever<T> = [T] extends [never] ? true : false

type demo = IsNever<never>

export { }