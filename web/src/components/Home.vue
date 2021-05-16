<template>
  <div class="min-h-screen grid place-items-center bg-blue font-mono text-center relative">
    <Card
      title='Hi, I am ICEKANG 😎'
      image_url="/me.jpg"
    >
      <template v-slot:description>
        <div class='relative'>
          I am (no doubt) a human with feelins
          <br>I am a Computer Engineer
          <br>A Founder of <a class='text-yellow hover:text-yellow-dark' href='https://www.facebook.com/InsidetheSandbox' target='_blank' rel='noopener noreferrer'>Inside the Sandbox</a>
          <br>An avid reader<span class='ml-1 bubble absolute cursor-pointer' @click=startBubble>📚</span>
          <br>Want to know more <a class='text-green hover:text-green-dark' href='/about'>about me?</a>
        </div>
      </template>
      <template v-slot:default>
        <a class='cursor-pointer has-tooltip mx-2' href='https://github.com/icekang' target='_blank' rel='noopener noreferrer'>
          <span class='tooltip rounded shadow-lg p-1 bg-yellow text-black -mt-8'>My GitHub Profile</span>
          <img
            class='h-7 w-7 transform hover:opacity-40 duration-700'
            src='/github-icon.png'
            alt='my github link'
          />
        </a>
        <a class='cursor-pointer has-tooltip mx-2' href='https://www.linkedin.com/in/naravich-chutisilp-03272719a' target='_blank' rel='noopener noreferrer'>
          <span class='tooltip rounded shadow-lg p-1 bg-yellow text-black -mt-8'>My LinkedIn Profile</span>
          <img
            class='h-7 w-7 transform hover:opacity-40 duration-700'
            src='/linkedin-icon.png'
            alt='my linkedin link'
          />
        </a>
        <i class='cursor-pointer has-tooltip mx-2' :class="{'visible': showCredit}">
          <span :class="{'tooltip': !showCredit}" class='absolute rounded shadow-lg p-1 bg-yellow text-black -mt-20 -ml-64 lg:-ml-0'>
            Card Design: <a class='text-green' href='https://www.youtube.com/watch?v=kFOkbINmYVU' target='_blank' rel='noopener noreferrer'>Stack Reboot</a>
            <br>
            Tooltip: <a class='text-green' href='https://github.com/Cosbgn/tailwindcss-tooltips' target='_blank' rel='noopener noreferrer'>Cosbgn</a>
            <br>
            click the icon to make this popup stay
          </span>
          <i class="material-icons text-green-light" style="font-size: 2rem" @click="showCredit = !showCredit">help_outline</i>
        </i>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Card from './Card.vue'
import { gsap } from 'gsap'

function startBubble() {
  let object = {
    el: '.bubble',
    duration: 3
  }
  gsap.fromTo(object.el, {
    opacity: 1,
    y: '+=0',
    x: () => (Math.random() * 5) * (Math.random() < 0.5 ? -1 : +1),
    scale: 1.5,
    transformOrigin: 'center'
  }, {
    opacity: 0,
    y: '-=80',
    x: Math.PI * 4,
    modifiers: {
      x: function(x) {
        return Math.sin(parseFloat(x)) * 30 + "px";
      }
    },
    scale: 0,
    duration: object.duration,
    stagger: {
      each: object.duration / document.querySelectorAll(object.el).length, 
      repeat: -1
    }
  })
}

export default defineComponent({
  name: 'Home',
  props: {
  },
  components: {
    Card,
    RouterLink
  },
  setup: () => {
    const showCredit = ref(false)
    onMounted(() => {
      gsap.to('.bubble', {
        scale: 1.3,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'expo.inOut',
        delay: 5
      })
    })

    return { 
      showCredit,
      startBubble
    }
  }
})
</script>

<style scoped>
  .bubble {
    opacity: 1
  }
</style>
