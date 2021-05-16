<template>
  <div class="bg-white w-3/4 md:w-96 rounded-md p-3 shadow-2xl">
    <div class="flex justify-center items-center leading-none">
      <img
        :src="image_url"
        alt="pic"
        class="h-auto w-72 rounded-md shadow-2xl mt-6 transform -translate-y-16 hover:-translate-y-4 transition duration-700"
      />
    </div>
    <div class="p-2">
      <p class="block mb-1 font-extralight text-xl">{{title}}</p>
      <p class="text-xs tracking-tighter text-gray-600">
        <slot name="description" />
      </p>
    </div>
    <div class="flex justify-between items-center p-2 px-16">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Card',
  props: {
    image_url: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  setup: () => {
    return { }
  }
})
</script>

<style scoped>
</style>
