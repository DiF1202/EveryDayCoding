function getPropValue<T extends object, Key extends keyof T>(obj: T, key: Key): T[Key] {
  return obj[key]
}

const obj = {
  a: 1,
  b: 2
}

console.log(getPropValue(obj, 'a'))