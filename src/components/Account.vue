<template>
  <div>
    <h1>Account</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { logout } from '@/utils/auth'

export default {
  methods: {
    logout () {
      logout()
        .then(() => this.$router.push('/'))
    }
  }
}
</script>
