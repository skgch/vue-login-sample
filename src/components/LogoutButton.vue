<template>
  <button @click="logout">Logout</button>
</template>

<script>
import { logout } from '@/utils/auth'

export default {
  methods: {
    logout () {
      logout()
      this.$router.push('/login')
    }
  }
}
</script>
