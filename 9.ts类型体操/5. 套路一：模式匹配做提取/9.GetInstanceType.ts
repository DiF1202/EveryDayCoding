type GetInstanceType<ConstructorType extends new (...args: any) => any>
  = ConstructorType extends new (...args: any) => infer InstanceType
  ? InstanceType
  : any;

interface Person {
  name: string;
}

interface PersonConstructor {
  new(name: string): Person;
}

type GetInstanceTypeRes = GetInstanceType<PersonConstructor>;
