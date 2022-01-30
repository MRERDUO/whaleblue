import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/homePage'
import loginPage from '@/pages/loginPage'
import register from '@/pages/register'
import indentPage from '@/pages/indentPage'
import shopPage from '@/pages/shopPage'
import listPage2 from '@/pages/listPage2'
import listPage3 from '@/pages/listPage3'
import listPage4 from '@/pages/listPage4'
import listPage5 from '@/pages/listPage5'
import listPage6 from '@/pages/listPage6'
import listPage7 from '@/pages/listPage7'
import listPage from '@/pages/listPage'
import detailPage from '@/pages/detailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },{
      path: '/homePage',
      name: 'homePage',
      component: homePage
    },{
      path:'/loginPage',
      name:'loginPage',
      component:loginPage
    },{
      path:'/register',
      name:'register',
      component:register
    },{
      path:'/indentPage',
      name:'indentPage',
      component:indentPage
    },{
      path:'/shopPage',
      name:'shopPage',
      component:shopPage
    },{
      path:'/listPage',
      name:'listPage',
      component:listPage
    },{
      path:'/detailPage',
      name:'detailPage',
      component:detailPage
    },{
      path:'/listPage2',
      name:'listPage2',
      component:listPage2
    },{
      path:'/listPage3',
      name:'listPage3',
      component:listPage3
    },{
      path:'/listPage4',
      name:'listPage4',
      component:listPage4
    },{
      path:'/listPage5',
      name:'listPage5',
      component:listPage5
    },{
      path:'/listPage6',
      name:'listPage6',
      component:listPage6
    },{
      path:'/listPage7',
      name:'listPage7',
      component:listPage7
    }
  ]
})
