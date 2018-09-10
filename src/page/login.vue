<template>
<div>
  <div class="login">
      <div class="loginbox">       
        <form>
           <h3 class="tl"><strong class="f24">欢迎！</strong>登录</h3>
            <el-input
              placeholder="请输入账户名" v-model="form.name">
            <i slot="prefix" class="icon iconfont icon-people loginwd"></i>
          </el-input>
          <el-input
              placeholder="请输入密码" class="mt10" v-model="form.pass" type="password">
            <i slot="prefix" class="icon iconfont icon-lock loginwd"></i>
          </el-input>
          <el-button type="primary" class="width100 mt10"  @click="loginbtn()">登录</el-button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('../assets/css/iconfont.css');
.mt10{margin-top:10px;}
.loginbox{width:20%;height:20%;display: inline-block;position:absolute;left:50%;top:50%;transform: translate3d(-50%,-50%,0)}
.loginbox form{padding:20px;border:1px solid #ddd;position:relative}
.ponst{width:100%;height:100%;position: absolute;top:0px;left:0px;background:rgba(0,0,0,0.3);z-index:1;pointer-events: none}
.loginwd{font-size:20px;display: inherit;margin-top: 9px;}
.f24{font-size:24px;}
.width100{width:100%;}
.tl{text-align: left}
</style>
<script>
//import '../assets/css/iconfont.css';
import {mapState,mapMutations} from 'vuex';
import axios from 'axios';
export default {
  name:'login', 
  data(){
    return {
       form:{
         name:"",
         pass:""
       }
    }
  },
  methods:{
    ...mapMutations(["seinfo"]),
    loginbtn()
      {
       
        // if(this.form.name=="wujia"&&this.form.pass=="123456")
        // {
        //   this.$store.state.loginuse=true;
        //    let redirect = decodeURIComponent(this.$route.query.redirect ||'/findex');
        //     this.$router.push({
			  //                           path:redirect,
        //                         });
        
        // }
        // else{
        //   alert("账户名或密码不正确!");
        // }
        axios.post('/api/post',{name:this.form.name,password:this.form.pass}).then((data)=>{
          if(data.status=="200")
          {
            this.seinfo(this.form.name);
            console.log(this.$store.state)
            let redirect = decodeURIComponent(this.$route.query.redirect ||'/findex');
                this.$router.push({
                                    path:redirect,
                                  });
          }
        })
        
				


      }
  }, 
  mounted(){
   
  }
  

}
</script>
