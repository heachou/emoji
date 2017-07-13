import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Types from '../pages/Types'
import Me from '../pages/Me'
import Search from '../pages/Search'
import NotFoundComponent from '../pages/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/types',
      name: 'types',
      component: Types
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/search/:type',
      name: 'search',
      component: Search
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
