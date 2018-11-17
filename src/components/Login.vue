<template>
 <div>
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>User ID</label>
     <input required v-model="id" type="text" placeholder="Snoopy"/>
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
      id: '',
      password: ''
    }
  },

  methods: {
    login () {
      login({ id: this.id, password: this.password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>
