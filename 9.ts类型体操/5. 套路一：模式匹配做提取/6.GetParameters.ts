type GetParameters<Func extends Function> =
  Func extends (...args: infer Args) => unknown ? Args : never


type test = GetParameters<(name: string) => {}>