import axios from 'axios'

export default function loginRoutine (user) {
  Promise((resolve, reject) => {
    axios({ url: 'auth', data: user, method: 'POST' })
      .then(res => {
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
