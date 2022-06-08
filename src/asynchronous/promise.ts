export default function promise() {
  const url = 'https://api.github.com/users/irishkooky'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          res
            .json()
            .then((json: Profile) => {
              console.log('1こめ', json)
              resolve(json)
            })
            .catch((err) => {
              console.error(err)
              reject(null)
            })
        })
        .catch((err) => {
          console.error(err)
          reject(null)
        })
    })
  }

  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log('2こめ', profile)
      }
    })
    .catch()
}
