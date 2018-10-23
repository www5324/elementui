<template>
    <div>
      <v-head @click.native="test()"></v-head>
    </div>
</template>
<style>

</style>
<script>
import head from "../components/head"
export default{
    name:'index',
    data(){
        return{
 
        }
    },
    components:{
      'v-head':head,
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