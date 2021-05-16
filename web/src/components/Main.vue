<template>
  <div class="min-h-screen grid place-items-center bg-blue font-mono">
    <Card
      title='Hi, I am ICEKANG 😎'
      description="
      I am (no doubt) a human with feelins
      <br>I am a Computer Engineer
      <br>A Founder of <a class='text-yellow' href='https://www.facebook.com/InsidetheSandbox' target='_blank' rel='noopener noreferrer'>Inside the Sandbox</a>
      <br>An avid reader📚
      <br>Want to know more about me?
      "
      image_url="/me.jpg"
    >
      <img
        src="/logo.jpg"
        alt="icekang"
        class="rounded-full h-7"
      />
      <div class="flex">
        <i class='cursor-pointer has-tooltip mx-2' href='https://github.com/icekang' target='_blank' rel='noopener noreferrer'>
          <span class='tooltip rounded shadow-lg p-1 bg-yellow text-black -mt-8'>My GitHub Profile</span>
          <img
            class='h-7 w-7 transform hover:opacity-40 duration-700'
            src='/github-icon.png'
            alt='my github link'
          />
        </i>
        <i class='cursor-pointer has-tooltip mx-2' href='www.linkedin.com/in/naravich-chutisilp-03272719a' target='_blank' rel='noopener noreferrer'>
          <span class='tooltip rounded shadow-lg p-1 bg-yellow text-black -mt-8'>My LinkedIn Profile</span>
          <img
            class='h-7 w-7 transform hover:opacity-40 duration-700'
            src='/linkedin-icon.png'
            alt='my linkedin link'
          />
        </i>
        <i class='cursor-pointer has-tooltip mx-2' :class="{'visible': showCredit}">
          <span :class="{'tooltip': !showCredit}" class='absolute rounded shadow-lg p-1 bg-yellow text-black -mt-20'>
            Card Design: <a class='text-green' href='https://www.youtube.com/watch?v=kFOkbINmYVU' target='_blank' rel='noopener noreferrer'>Stack Reboot</a>
            <br>
            Tooltip: <a class='text-green' href='https://github.com/Cosbgn/tailwindcss-tooltips' target='_blank' rel='noopener noreferrer'>Cosbgn</a>
            <br>
            click the icon to make this popup stay
          </span>
          <i class="material-icons text-lightGreen" style="font-size: 2rem" @click="showCredit = !showCredit">help_outline</i>
        </i>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Card from './Card.vue'
export default defineComponent({
  name: 'Main',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  components: {
    Card
  },
  setup: () => {
    const showCredit = ref(false)
    return { showCredit }
  }
})
</script>

<style scoped>
</style>
