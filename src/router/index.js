import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index  from '@/page/index'
import login  from '@/page/login'
import findex from '@/page/findex'
import admin from '@/page/admin'
import main from '@/page/main'
import table from '@/page/table'
import tablenm from '@/page/tablenm'
import flex from '@/components/flex'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      leaf: true,         
    },
    {
      path: '/admin',
      name: '后台管理',
      component: admin,      
      children:[
            { path: '/admin/main', component: main, name: '主页',hidden:false},
            {path:'',name: '表格',parent:1001,zu:true},
            { path: '/admin/tablenm',component: tablenm, name:'表格',zj:1001,hidden:false},
            { path: '/admin/table',component: table, name:'表格2',zj:1001,hidden:false},
            {path:'',name: '文章',parent:1002,zu:true}, 
            {path:'/admin/findex',name: '文章1',component:findex,jz:1002,hidden:false},    
      ],
      leaf: false,     
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
     },
     leaf: true, 
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      hidden: true 
    }, 
    {
      path: '/findex',
      name: 'findex',
      component:findex,
      leaf: true, 
    }, 
    {
     path:'/flex',
     name:'flex',
     component:flex,
     leaf: true, 
    },
    {path:'*',redirect:'/login',hidden: true}
  ]
})
