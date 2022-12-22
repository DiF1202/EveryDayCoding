type getReturnType<func extends Function> =
  func extends (...args: any[]) => infer ReturnType ? ReturnType : never


type test = getReturnType<() => 'aa'>