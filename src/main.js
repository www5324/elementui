// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import { store } from './store/store.js';
import VueParticles from 'vue-particles'

Vue.use(ElementUI);
Vue.use(VueParticles) 
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data:{
   bus:new Vue(),
  },
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
         console.log(store.state.loginoff);
      if (store.state.loginoff) {  // 通过vuex state获取当前的token是否存在
          next();
      } else {
          next({
              path: '/login',
              query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
  } else {
      next();
  }
})