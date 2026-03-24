import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TechView from '../views/TechView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'mohub | 首页',
    },
  },
  {
    path: '/tech',
    name: 'tech',
    component: TechView,
    meta: {
      title: 'mohub | 技术交流',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

router.afterEach((to) => {
  if (typeof document !== 'undefined' && to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
