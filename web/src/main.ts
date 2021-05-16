import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import './index.css'
import Home from './components/Home.vue'
import About from './components/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, },
  { path: '/about', name: 'About', component: About, },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
