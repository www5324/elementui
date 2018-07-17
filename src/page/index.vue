<template>
  <div>
        <div>我是首页</div>
        <v-hello ref='test' @pops='fdatas' :msg='vdata'></v-hello>
        <v-model></v-model>
        <a href="javascript:" @click="add()">点击</a>
        <div v-text='fdata'></div>
        <div @click="kclick()">试试pops能不能点击改变子组件的值</div>
        <div ref='mdiv'>再试一下ref的情况</div>
        <a href="javascript:" @click="reftest()">ref引用元素</a>
  </div>  
</template>
<style>

</style>
<script>
import hello from "../components/HelloWorld.vue";
import model from "../components/model";

export default {
    name:'index',
    data(){
      return{
        fdata:'我可是的父亲组件里边的哟',
        vdata:'props传值问题',
      }
    },
    components:{
      'v-hello':hello,
      'v-model':model
    },
    methods:{
    	add(){
        console.log(this.$refs.test.msg);
    		this.$refs.test.test("改变子组件的值");   //父亲组件调用子组件里的方法和data里边的值。
    	},
    	fdatas(value){
    		this.fdata=value 
      },
      kclick()                  //看点击后能不能改变pops传值的问题
      {
        this.vdata="看pops后能不能传入值"
      },
      reftest(){
        console.log(this.$refs.mdiv.innerHTML);
      }
    }
}
</script>

