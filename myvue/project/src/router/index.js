import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//引入组件
import home from '@/components/home/home'
import search from '@/components/search/search'
import shopping from '@/components/shopping/shopping'
import vip from '@/components/vip/vip'
import newsList from '@/components/news/newsList'
import newsDetail from '@/components/news/newsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   //这个地方 path  /  代表着这是主页的路由
    //   path: '/',
    //   name: 'HelloWorld',
    //   //组件是helloworld  ->  components  ->helloworld.vue
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'home',
      //组件是helloworld  ->  components  ->helloworld.vue
      component:home
    },{
      path: '/search',
      name: 'search',
      //组件是helloworld  ->  components  ->helloworld.vue
      component:search
    },{
      path: '/shopping',
      name: 'shopping',
      //组件是helloworld  ->  components  ->helloworld.vue
      component:shopping
    },{
      path: '/vip',
      name: 'vip',
      //组件是helloworld  ->  components  ->helloworld.vue
      component:vip
    },{
      path: '/news/list',
      name: 'news.list',
      //组件是helloworld  ->  components  ->helloworld.vue
      component:newsList
    },{
      path: '/news/detail',
      name: 'news.detail',
      //组件是helloworld  ->  components  ->helloworld.vue
      component:newsDetail
    }
  ]
})
