type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]] ? First : never

type res = GetFirst<[1, 2, 3]>

type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last] ? Last : never

type last = GetLast<[1, 2, 3]>

type GetRest<Arr extends unknown[]> = Arr extends [infer First, ...infer Rest, infer Last] ? Rest : never

type rest = GetRest<[1, 2, 3, 4]>