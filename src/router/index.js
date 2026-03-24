import Vue from 'vue'
import VueRouter from 'vue-router'

import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Future Atlas | 首页',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'Future Atlas | 关于',
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
