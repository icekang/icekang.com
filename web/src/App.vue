<template>
  <div>
    <!-- <RouterLink to='/about'>About</RouterLink>
    <RouterLink to='/'>home</RouterLink> -->
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    RouterLink,
    RouterView
  }
})
</script>