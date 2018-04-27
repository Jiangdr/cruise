import Vue from 'vue'
import Router from 'vue-router'

const Nav = () => import('@/components/nav/Index.vue');
const Home = () => import('@/components/home/Index.vue');
const Error = () => import('@/components/view/TheError.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      // redirect: '/index',
      name: 'Nav',
      component: Nav,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: Error,
    },
  ]
})
