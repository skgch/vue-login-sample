<template>
  <div>
    <h1>Home</h1>
    <router-link v-if="isAdmin" to="admin">Admin</router-link>
    <logout-button/>
  </div>
</template>

<script>
import LogoutButton from '@/components/LogoutButton'
export default {
  components: {
    LogoutButton
  },
  computed: {
    isAdmin () {
      return JSON.parse(localStorage.getItem('auth')).user.role === 'admin'
    }
  }
}
</script>
