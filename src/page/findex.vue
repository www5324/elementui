<template>
    <div>
      <v-head @click.native="test()"></v-head>
      <drag></drag>
    </div>
</template>
<style>

</style>
<script>
import head from "../components/head"
import drag from "../components/drag"
export default{
    name:'index',
    data(){
        return{
 
        }
    },
    components:{
      'v-head':head,
       drag:drag
    },
    mounted(){
   
  },
  methods:{
      test(){
        alert(1)
      }
  }
 
  
}
</script>