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
             <aside class="aside">
               <el-menu  class="el-menu-vertical-demo" :collapse="isCollapse" router>
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
               </el-menu>     
             </aside>
             <section class="content-container">
                 <el-col :span="24">
                     <transition name="fade" mode="out-in">
							<router-view></router-view>
				   </transition>
                 </el-col>
                
             </section>   
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
        gets:true
         }
     },
     mounted(){
         console.log(this.$router);
     },
     methods: {
         menuck(index1,index2){
                this.gets=false       
                        
         }
     }
     
}
</script>
