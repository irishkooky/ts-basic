export default function tuple() {
  // 一般的なタプル
  const response: [number, string] = [200, 'OK']
  // response = ["4", "H", "res"]
  console.log(response)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['kana', 'miku', 'saori']
  girlfriends.push('kana')
  console.log(girlfriends)

  // イミュータブル
  const commands: readonly string[] = ['kana', 'miku', 'saori']
  // commands.push()
  // commands[2] = "miku"

  console.log(commands)

  const numbers: ReadonlyArray<number> = [1, 2, 3]
  const names: Readonly<string[]> = ['seer', 'fdf']
  console.log(numbers)
  console.log(names)
}
