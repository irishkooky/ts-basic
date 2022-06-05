export default function arraySample() {
  const colors: string[] = ['red', 'green', 'blue', 'alpha']
  colors.push('dd')
  console.log(colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push("10")
  console.log(even)

  const ids: (string | number)[] = [1, 3, 'dd']
  ids.push(8)
  ids.push('10')

  console.log(ids)

  // 型推論
  const generateSomeArray = () => {
    const _someArray = []
    _someArray.push(123)
    _someArray.push('string')
    return _someArray
  }

  const someArray = generateSomeArray()
  console.log(someArray)
}
