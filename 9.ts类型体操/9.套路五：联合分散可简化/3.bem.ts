// bem 是 css 命名规范，用 block__element--modifier
// 的形式来描述某个区块下面的某个元素的某个状态的样式。


// 1.首先思考数组如何转为联合类型
type union = ['aa', 'bb'][number]

type BEM<
  Block extends string,
  Element extends string[],
  Modifiers extends string[]
> = `${Block}__${Element[number]}--${Modifiers[number]}`;


type demo = BEM<'hdf', ['aaa', 'bbb'], ['cccc', 'ddd']>

export { }