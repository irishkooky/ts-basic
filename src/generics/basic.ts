export default function genericsBasic() {
  // ジェネリック使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log(stringReduce(['May ', 'the ', 'dd'], 'df'))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log(numberReduce([22, 33, 44], 11))

  type Reduce = {
    (array: string[], initialValue: string): string
    // (array: number[], initialValue: number): number
  }
  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log(genericStringReduce(['Mayyyyyyyyyyyyyyyy ', 'the ', 'dd'], 'df'))
}
