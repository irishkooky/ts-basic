export default function notExistSample() {
  const name = 'ヨシヒロ'
  console.log('primitive sample 1:', typeof name, name)

  if (name === null) {
    console.log('primitive sample 2:', '吾輩は猫である。名前はまだない')
  } else {
    console.log('primitive sample 3:', '吾輩は猫である。名前は' + name)
  }

  const age = 25
  console.log('primitive sample 4:', typeof age, age)

  if (!age) {
    console.log('primitive sample 5:', '年齢は秘密です。')
  } else {
    console.log('primitive sample 5:', '年齢は' + age + 'です。')
  }
}
