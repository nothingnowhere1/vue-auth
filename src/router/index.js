import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue';
import Main from '@/components/Main.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	  { path: '/', redirect: '/login' },
    {
      path: '/main',
      name: 'Main',
      component: Main,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
})

export default router
