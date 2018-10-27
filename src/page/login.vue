<template>
<div>
  <div class="login">
      <div class="loginbox">       
        <form @keyup.enter="loginbtn()">
           <h3 class="tl"><strong class="f24">欢迎！</strong>登录</h3>
            <el-input
              placeholder="请输入账户名" v-model="form.name">
            <i slot="prefix" class="icon iconfont icon-people loginwd"></i>
          </el-input>
          <el-input
              placeholder="请输入密码" class="mt10" v-model="form.pass" type="password">
            <i slot="prefix" class="icon iconfont icon-lock loginwd"></i>
          </el-input>
          <div class="tl mt10">
            <el-checkbox v-model="form.checked">记主密码</el-checkbox>
            <a href="javascript:">忘记密码</a>
          </div>
          <el-button type="primary" class="width100 mt10" @keyup.enter="loginbtn()"  @click="loginbtn()">登录</el-button>
        </form>
      </div>
    </div>
    <vue-particles
        color="#fff"
        :particleOpacity="0.6"
        :particlesNumber="60"
        shapeType="edge"
        :particleSize="4"
        linesColor="#000"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="0.8"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
    <!-- <div id="particles"></div> -->
  </div>
</template>
<style scoped>
@import url('../assets/css/iconfont.css');
.mt10{margin-top:10px;}
.lizi{background-image: url('http://www.moo-i.net/upload/world.jpg');background-size:100% 100%;}
.loginbox{width:20%;height:20%;display: inline-block;position:absolute;left:50%;top:50%;transform: translate3d(-50%,-50%,0)}
.loginbox form{padding:20px;border:1px solid #ddd;position:relative;background:#fff;}
.ponst{width:100%;height:100%;position: absolute;top:0px;left:0px;background:rgba(0,0,0,0.3);z-index:1;pointer-events: none}
.loginwd{font-size:20px;display: inherit;margin-top: 9px;}
.f24{font-size:24px;}
.width100{width:100%;}
.tl{text-align: left}
.tr{text-align: right}
#particles{
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #b61924;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
}

</style>
<script>
//import '../assets/css/iconfont.css';
import {mapState,mapMutations} from 'vuex';

import axios from 'axios';
import md5 from 'js-md5';
let Base64 = require('js-base64').Base64;
export default {
  name:'login', 
  data(){
    return {
       form:{
         name:"",
         pass:"",
         checked:false
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
          console.log(data)          
          if(data.status=="200"&&data.data.length>0)
          {

              this.seinfo(this.form.name);
              if(this.form.checked)
              {
                var obj={}
                obj.name=Base64.encode(this.form.name);
                obj.password=Base64.encode(this.form.pass);
                console.log(obj.password);            
                var tmpdata=JSON.stringify(obj)
                localStorage.setItem("logininform",tmpdata);
              }else
              {
                    localStorage.removeItem("logininform");
              }      
              let router=[ {
                path:'/reg2',
                name: '测试', 
                component:(resolve) => require(['../components/model.vue'], resolve),
                          },
                          {
                path:'/reg3',
                name: '测试', 
                component:(resolve) => require(['../components/model.vue'], resolve),
                          }
                          
                          ] 
                          var mum=this.$router.options.routes.push(router);
                                       
           this.$router.addRoutes(router);

         console.log(this.$router); 
              let redirect = decodeURIComponent(this.$route.query.redirect ||'/admin');
                this.$router.push({
                                    path:redirect,
                                  });
          }
          else{
             alert("密码或者账号不证确");
          }
        })
      }
  }, 
  mounted(){
      var logininform=JSON.parse(localStorage.getItem("logininform"));
      if(logininform)
      {
         this.form.name=Base64.decode(logininform.name);
         this.form.pass=Base64.decode(logininform.password);
         this.form.checked=true;
      } 
     

  }
  

}
</script>
