<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  created () {
    axios.interceptors.response.use(undefined, function (err) {
      return Promise((resolve, reject) => {
        if (err.status === 401) {
          localStorage.removeItem('user-token')
          this.$router.push('/login')
        }
        throw err
      })
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
