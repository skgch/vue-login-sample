import axios from 'axios'

export function login (user) {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:3000/api/v1/login', user)
      .then(res => {
        const auth = res.data
        localStorage.setItem('auth', JSON.stringify(auth))
        axios.defaults.headers.common['Authorization'] = auth.token
        resolve(res)
      })
      .catch(err => {
        localStorage.removeItem('auth')
        reject(err)
      })
  })
}

export function logout () {
  return new Promise((resolve, reject) => {
    localStorage.removeItem('auth')
    axios.get('http://localhost:3000/api/v1/logout')
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}
