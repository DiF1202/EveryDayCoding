type DeepReadonly<Obj extends Record<string, any>> =
  Obj extends any
  ? {
    readonly [Key in keyof Obj]:
    Obj[Key] extends object
    ? Obj[Key] extends Function
    ? Obj[Key]
    : DeepReadonly<Obj[Key]>
    : Obj[Key]
  }
  : never;

type testObj = {
  a: {
    b: {
      c: {
        f: () => 'dong',
        d: {
          e: {
            guang: string
          }
        }
      }
    }
  }
}

type demo = DeepReadonly<testObj>