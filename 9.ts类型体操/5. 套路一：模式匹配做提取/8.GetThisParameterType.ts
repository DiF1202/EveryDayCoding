class Dog {
  name: string;

  constructor() {
    this.name = 'dog'
  }

  bark(this: Dog) {
    console.log("dog like barking")
  }
}

const dog = new Dog()

type GetThisParameterType<T> =
  T extends (this: infer ThisType, ...args: any[]) => any ? ThisType : unknown

type test = GetThisParameterType<typeof dog.bark>