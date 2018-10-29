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
import reg from '@/page/reg'
import error from '@/page/error'
import user1 from '@/page/user1'
import user2 from '@/page/user2'
Vue.use(Router)
 export const arr=[
  {
  path: '/HelloWorld',
  name: 'HelloWorld',
  component: HelloWorld,
  leaf: true,         
},
{
  path:'/reg',
  name:'reg',
  component:reg,
  leaf:true,
},
{
  path: '/admin',
  name: '后台管理',
  component: admin,      
  children:[
        { path:'/main', component: main, name: '主页',hidden:false}, 
        { path:'/tablenm',component: tablenm, name:'表格',zj:1001,hidden:false},
        {path:'/table',component:table,name:'表格2'},
        { path:'/user1',component:user1, name:'用户管理1'},
        {path:'/user2',component:user2,name:'用户管理2'}              
  ],
  leaf:false,     
},    
{
  path: '/login',
  name: 'login',
  component: login,
  hidden: true,
  leaf:true, 
}, 
{
  path: '/findex',
  name: 'findex',
  component:findex,
  leaf: true, 
  meta: {
    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
 },
}, 
{
 path:'/flex',
 name:'flex',
 component:flex,
 leaf: true, 
},
// {path:'/',component:login,hidden: true,leaf:true},
// {path:'*',component:error,hidden: true,leaf:true}
]

export default new Router({
  mode:'history',
  routes: [
      {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      leaf: true,         
    },
    {
      path:'/reg',
      name:'reg',
      component:reg,
      leaf:true,
    },
    {
      path: '/admin',
      name: '后台管理',
      component: admin,      
      children:[
            { path:'main', component: main, name: '主页',hidden:false}, 
            { path:'tablenm',component: tablenm, name:'表格',zj:1001,hidden:false},
            {path:'table',component:table,name:'表格2'},   
            { path:'user1',component:user1, name:'用户管理1'},
            {path:'user2',component:user2,name:'用户管理2'}            
      ],
      leaf:false,     
    },    
    {
      path: '/login',
      name: 'login',
      component: login,
      hidden: true,
      leaf:true, 
    }, 
    {
      path: '/findex',
      name: 'findex',
      component:findex,
      leaf: true, 
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
     },
    }, 
    {
     path:'/flex',
     name:'flex',
     component:flex,
     leaf: true, 
    },
     {path:'/',component:login,hidden: true,leaf:true},
    {path:'*',component:error,hidden: true,leaf:true}
  ]

})
