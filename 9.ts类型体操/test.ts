type GetPropsType<Props> =
  'ref' extends keyof Props ? Props extends { ref?: infer Value | undefined } ? Value
  : never
  : never