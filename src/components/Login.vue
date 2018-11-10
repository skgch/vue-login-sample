<template>
 <div>
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>User name</label>
     <input required v-model="username" type="text" placeholder="Snoopy"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
 </div>
</template>

<script>
import { login } from '@/utils/auth'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    login () {
      login({ username: this.username, password: this.password })
        .then(() => this.$router.push('/'))
    }
  }
}
</script>
