type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []>
  = Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>

// 加法
type Add<Num1 extends number, Num2 extends number> =
  [...BuildArray<Num1>, ...BuildArray<Num2>]['length']

type demo = Add<4, 5>

// 减法
type Subtract<Num1 extends number, Num2 extends number> =
  BuildArray<Num1> extends [...arr1: BuildArray<Num2>, ...arr2: infer Rest]
  ? Rest['length']
  : never

type demo2 = Subtract<5, 2>

// 乘法
type Mutiply<Num1 extends number, Num2 extends number, ResultArr extends unknown[] = []>
  = Num2 extends 0 ? ResultArr['length']
  : Mutiply<Num1, Subtract<Num2, 1>, [...BuildArray<Num1>, ...ResultArr]>

type demo3 = Mutiply<2, 3>

// 除法
type Divide<
  Num1 extends number,
  Num2 extends number,
  CountArr extends unknown[] = []
> = Num1 extends 0 ? CountArr['length'] :
  Divide<Subtract<Num1, Num2>, Num2, [unknown, ...CountArr]>

type demo4 = Divide<30, 5>