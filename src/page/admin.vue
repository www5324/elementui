<template>
    <el-row class="container">
        <el-col :span="24" class="header">
            <el-col :span='10' class="logo">
                oa管理系统
            </el-col>
            <el-col :span='10'>
            </el-col> 
            <el-col :span='4'>
            </el-col>  
        </el-col> 
        <el-col :span="24" class="main">
             <el-col  :span="4">
               <!-- <el-menu  class="el-menu-vertical-demo" :collapse="isCollapse" router>
                   <template v-for="(item,index1) in $router.options.routes" v-if="!item.hidden">
                         <el-submenu index="index+''" :key="index1" v-if="!item.leaf">
                             <template slot="title">
                              <i class="iconfont icon-people_fill"></i>
                                <span>{{item.name}}</span>
                             </template>
                            <template v-for="(child,index2) in item.children"> 
                                <el-menu-item  :index="child.path" :key="child.path" v-if="!child.parent&&!child.hidden">
                                    {{child.name}}                                                                                               
                                </el-menu-item>
                                <el-menu-item-group  v-else-if="child.parent">
                                      <template slot="title">
                                          <div @click="menuck(index1,index2)">
                                           <i class="iconfont icon-people_fill"></i>
                                           <span>{{child.name}}</span>
                                         </div>                                           
                                         <el-menu-item  :index="child.path" :key="child.path" v-if="!child.parent">
                                            {{child.name}}                                                                                               
                                        </el-menu-item>
                                      </template>   
                                </el-menu-item-group>
                            </template>                                                   
                          </el-submenu>    
                   </template>   
               </el-menu> -->
               <el-menu class="el-menu-vertical-demo"
               style="min-height: 100%;" 
               :default-active="defaultActive"
                background-color="#545c64"
                text-color="#fff"
                :unique-opened=true
                active-text-color="#C40909"
                @select="handleSelect"
                router>
                    <el-menu-item index="main" >首页</el-menu-item>
                    <el-submenu index='table'>
                        <template slot="title">表格管理</template>
                        <el-menu-item index="table">
                            表格1
                        </el-menu-item>
                        <el-menu-item index="tablenm" >
                            表格2
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index='3'>
                        <template slot="title">表格管理</template>
                        <el-menu-item index="user1">
                            用户管理1
                        </el-menu-item>
                        <el-menu-item index="user2">
                            用户管理2
                        </el-menu-item>
                    </el-submenu>
               </el-menu> 
        <!-- <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="admin">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu> -->
             </el-col>
             <el-col class="content-container" :span="20">
                 <el-col :span="24">
                      <!-- <router-link :to="{path:'/admin'+menu,}">首页</router-link>
                      <router-link to="/admin/tablenm">表格2</router-link>
                      <router-link to="/admin/table">表格3</router-link> -->
                     <transition name="fade" mode="out-in">
							<router-view></router-view>
				   </transition>
                 </el-col>                
             </el-col>   
        </el-col>     
    </el-row>   
</template>

<style lang="less">
@import url("../assets/css/iconfont.css");
.container{
    width:100%;
    position:absolute;
    top:0px;
    bottom:0px;
    .header{
      height:60px;
      line-height:60px;
      background:#20a0ff;
      .logo{
          width:230px;
          color:#fff;
          font-size:24px
      }      
    }
    .main{
        display:flex;
        overflow: hidden;
        position: absolute;
        top: 60px;
        bottom: 0px;
        .aside{
            width:200px;
            .el-menu{height:100%;background:#eef1f6}
            .el-submenu{
                .el-menu{
                    background:#e4e8f1;
                    &.hover{
                        background:black;
                    }
                }
            }
        }
        .content-container{
           width:100%;
        }        
    }
}
.fade-enter{transform:translate3d(100px,0px,0px);opacity: 0;}
.fade-leave{
  transform:translate3d(-100px,0px,0px);
  opacity: 1;
}
.fade-enter-active{transition:all .5s;}
.fade-leave-active{transition:all .5s;}
</style>
<script>

export default {
     name:"admin",     
     data()
     {
         return {
            isCollapse:false,   //这个用来控制收和折叠
            isRourt:false,
            gets:true,
            menu:"/main",        
            activeIndex: 'admin',
            activeIndex2: '1',
    
         }
     },
     created () {
     
     },
    computed: {
        defaultActive: function(){
             console.log(this.$route.path.replace('/admin/', ''));
            return this.$route.path.replace('/admin/', '');
        }
       
    },
     mounted(){
      console.log(this.$router)
     },
     methods: {
          handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
         menuck(index1,index2){
                this.gets=false       
                        
         }
     }
     
}
</script>
