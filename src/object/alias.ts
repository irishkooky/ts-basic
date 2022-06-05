export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log(japan)

  const usa: Country = {
    capital: 'dc',
    language: 'English',
    name: 'America',
  }
  console.log(usa)

  // 合併型と交差型
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型... KnightまたはWizardの型を持ちますよ
  type Adventurer = Knight | Wizard

  // 交差型... KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard

  // Knight寄りの冒険者
  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '3連切り',
  }

  // Wizard寄りの冒険者
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイヤーボール',
  }

  console.log('1', adventurer1)
  console.log('2', adventurer2)

  const paladin: Paladin = {
    hp: 100,
    sp: 30,
    mp: 30,
    weapon: '木の杖',
    swordSkill: '三連切り',
    magicSkill: 'ファイヤーボール',
  }

  console.log('2', paladin)
}
