export default function objectSample() {
  const a: object = {
    name: 'Yoshihiro',
    age: 25,
  }
  // a.name

  // オプショナル
  const torahack: {
    age: number
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    firstName: 'japan',
  }

  torahack.gender = 'male'
  console.log(torahack)

  // インデックスシグネチャー ← かなり使える
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korean: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log(capitals)
}
