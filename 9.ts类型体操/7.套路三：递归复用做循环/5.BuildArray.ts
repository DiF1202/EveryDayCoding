type BuildArray<Length extends number, Ele = unknown, Res extends unknown[] = []> =
  Res['length'] extends Length ? Res :
  BuildArray<Length, Ele, [...Res, Ele]>

type demo = BuildArray<3>