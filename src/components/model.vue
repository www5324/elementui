<template>
      <div>
          <div>{{name}}</div>
          <div @click='send()'>向hello组件传参数</div>
     </div>    
</template>
<style>

</style>
<script>
//import bus from "../assets/bus.js";
  export default
   {
     name:"model",
     data(){
         return{
             name:"作者",
             parm:"model"
         }
     },
     methods:{
         send()
         {            
          this.$root.bus.$emit('send',this.parm);
         }
     }
   }
</script>