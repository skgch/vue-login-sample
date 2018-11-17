<template>
  <div>
    <h1>Admin</h1>
    <router-link to="/">Home</router-link>
    <logout-button/>
  </div>
</template>

<script>
import LogoutButton from '@/components/LogoutButton'
export default {
  components: {
    LogoutButton
  }
}
</script>
