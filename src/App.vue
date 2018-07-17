<template>
  <div id="app" class="cf">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
   </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {  
        transitionName: 'slide-left'  
      } 
    },
    watch: {  
    '$route' (to, from) {  
      if(to.path == '/'){  
        this.transitionName = 'slide-right';  
       }else{  
        this.transitionName = 'slide-left';  
       }  
     }  
   }  
}
</script>

<style>
.cf:before,.cf:after{content:"";display:table}.cf:after{clear:both}.cf{zoom:1}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.child-view {  
  position: absolute;  
  left: 0;  
  top: 0;  
  width: 100%;  
  height: 100%;  
  transition: all .5s cubic-bezier(.55,0,.1,1);  
}  
.slide-left-enter, .slide-right-leave-active {  
  opacity: 0;  
  -webkit-transform: translate(30px, 0);  
  transform: translate(30px, 0);  
}  
.slide-left-leave-active, .slide-right-enter {  
  opacity: 0;  
  -webkit-transform: translate(-30px, 0);  
  transform: translate(-30px, 0);  
} 
</style>
