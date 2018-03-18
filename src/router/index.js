import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import Main from 'components/main/Index'

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.15
})

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Main
    },
    {
      path: '/fuck',
      name: 'Fuck',
      component: Main
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!(from.path === to.path && from.hash !== to.hash)) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
