import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import MallList from '@/pages/mall-list/mall-list'
import PersonCenter from '@/pages/person-center/person-center'
import ShoppingChart from '@/pages/shopping-cart/shopping-cart'
import SetUp from '@/pages/set-up/set-up'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/index',
      name: '首页',
      component: Index,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/list',
      name: '分类',
      component: MallList,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/center',
      name: '个人中心',
      component: PersonCenter,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/cart',
      name: '购物车',
      component: ShoppingChart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/setup',
      name: '设置',
      component: SetUp,
      meta: {
        showFooter: false
      }
    }

  ]
})
