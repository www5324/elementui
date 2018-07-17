<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
    <h2>{{ksg}}</h2>   
    <el-button @click="show = !show">Click Me</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
     <div class="block">
		  <span class="demonstration">
		  	<dl>
		  		<dd v-for="item in data">
		  			{{item.name}}            
		  		</dd>
		  	</dl>
		  </span>
		  <el-pagination
		    layout="prev, pager, next"
		    :total="100" :page-size='5' @current-change='page'>
		  </el-pagination>
		</div>
    
     <!--tab-->
      <el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="用户管理" name="first">用户管理233233</el-tab-pane>
		    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
		    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
		    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
		</el-tabs>
     <!--tab end-->
    <div class="test" @click="tabtest(activeName)">点击后改变tab选框</div>
    <div @click="father">子改变父亲</div>
    <div style="color:red">父组件改变子{{msg}}</div>
    <div>兄弟组件传过来的{{listnm}}</div>
  </div>
</template>

<script>
import axios from 'axios';
//import bus from '../assets/bus.js'
export default {
  name: 'HelloWorld',
  props:{
    msg:"",
  },
  data () {
    return {
      //msg: 'Welcome to Your Vue.js App',
      ksg:'爸爸在叫你',
      show: true,
      listnm:"",
      data:[
            {name:'wj',age:25},
            {name:'wj',age:25},          
      ],
      activeName: 'second',
      emit:'www',
    }
  },  
  methods:{
       	   page:function(currentPage){
       	   	console.log(currentPage);       	   	
       	   },
       	   handleClick(tab, event) {
	        console.log(tab.name);
	      },
	      tabtest:()=>{
	      	this.activeName='first';	      	
	      },
	      test:function(parm){
	      	this.ksg=parm;
	      },
	      father(){
	      	this.$emit('pops',this.emit)
	      }
       },
  mounted:function(){
//		   axios.post('http://222.180.162.200:17388/api/news/list',{"tokenId":'AFB53606115E422D87B15F4798A36174',
//				    	pageSize:5,
//				    	pageNumber:1,
//				    	newtype:0,}).then(function(){
//		   	
//		   });
      let that=this;
      this.$root.bus.$on("send",function(val){
               that.listnm=val
       })
		}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }	
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
