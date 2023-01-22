<template>
  <div class='bg-blue min-h-screen min-w-screen p-4'>
    <article class="prose lg:prose-xl mx-auto">
      <h1>{{`About Me`}}</h1>
      <p>
        <a href='/'>Naravich Chutisilp</a> is ....
      </p>
      <p>
        I am currently studying Master in Computer Science at EPFL, Switzerland.
      </p>
    </article>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Card from './Card.vue'

export default defineComponent({
  props: {
  },
  components: {
    Card
  },
  setup: () => {
    return {  }
  }
})
</script>

<!-- <style scoped>
h1 {
  @apply text-yellow
}
blockquote {
  @apply text-green
}
</style> -->
