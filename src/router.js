import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main
    }, 
    {
      path: '/history',
      component: () => import('./views/History.vue')
    }
  ]
})