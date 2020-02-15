import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import error from '@/components/Error'

import home from '@/page/home'
import home_content from '@/page/home/home_content'
import home_details from '@/page/home/home_details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          name: 'home_content',
          component: home_content
        },
        {
          path: 'home_details',
          name: 'home_details',
          component: home_details
        }
      ]
    },
    {
      path: '*',
      component: error
    }
  ]
})
