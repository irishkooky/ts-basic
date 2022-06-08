export default function callback() {
  const url = 'https://api.github.com/users/irishkooky'

  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        // レスポンスのBodyをJSONで読み取った結果を返す
        res
          .json()
          .then((json) => {
            console.log('1個目', json)
            return json
          })
          .catch((err) => {
            console.error(err)
          })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const profile = fetchProfile()
  console.log('2個目', profile)
}
