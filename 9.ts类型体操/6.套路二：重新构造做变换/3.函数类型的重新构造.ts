// AppendArgument
// 比如在已有的函数类型上添加一个参数：
type AppendArgument<Func extends Function, A> =
  Func extends (...args: infer Args) => infer ReturnType ?
  (...args: [...Args, A]) => ReturnType : never

type demo4 = AppendArgument<(a: number, b: number) => {}, number>