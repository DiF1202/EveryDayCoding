type DeepPromiseValueType<P extends Promise<unknown>> =
  P extends Promise<infer ValueType> ?
  ValueType extends Promise<unknown> ?
  DeepPromiseValueType<ValueType> :
  ValueType
  : never


type DeepPromiseValueType2<T> =
  T extends Promise<infer ValueType>
  ? DeepPromiseValueType2<ValueType>
  : T;