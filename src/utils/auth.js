import axios from 'axios'

export function login (user) {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:3000/api/v1/login', user)
      .then(res => {
        console.log(res)
        const token = res.data.token
        localStorage.setItem('user-token', token)
        axios.defaults.headers.common['Authorization'] = token
        resolve(res)
      })
      .catch(err => {
        localStorage.removeItem('user-token')
        reject(err)
      })
  })
}

export function logout () {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3000/api/v1/logout')
      .then(res => {
        localStorage.removeItem('user-token')
        resolve()
      }).catch(err => {
        localStorage.removeItem('user-token')
        reject(err)
      })
  })
}
