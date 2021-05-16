<template>
  <div class='bg-blue min-h-screen min-w-screen p-4'>
    <article class="prose lg:prose-xl mx-auto">
      <h1>{{`About Me`}}</h1>
      <p v-html="html" />
      <!-- <p>
        Naravich Chutisilp is Thai.
      </p>
      <blockquote>
        <p>
          What?
        </p>
      </blockquote>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
        springing up around the country.
      </p> -->
    </article>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { html } from './MarkDownSample.md'
import Card from './Card.vue'
export default defineComponent({
  props: {
  },
  components: {
    Card
  },
  setup: () => {
    return { html }
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
