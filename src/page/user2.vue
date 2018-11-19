<template>
    <div class="pr">
        <div class="dtest" style="height:300px">
          <swiper :options="swiperOption">
           <swiper-slide  class="org1">1</swiper-slide>
           <swiper-slide class="org2">2</swiper-slide>
           <swiper-slide class="org2">3</swiper-slide>
           <div class="swiper-pagination" data-v-6952ff60 slot="pagination">
               <span class="btn"></span>
                <span class="btn active"></span>
                 <span class="btn"></span>
            </div>
          </swiper>          
       </div>
       
        <!--以下看需要添加-->
        <!-- <div class="swiper-scrollbar"></div> //滚动条
        <div class="swiper-button-next"></div> //下一项
        <div class="swiper-button-prev"></div> //上一项
        <div class="swiper-pagination"></div> -->
    </div>
</template>
<style scoped>
.pr{position: relative;text-align: center}
.dtest{width:800px;margin:0 auto;}
.org1{background:red;height:300px;line-height: 300px;}
.org2{background:gold;height:300px;line-height: 300px;}
.swiper-pagination-bullet{transition: all 0.3s ease-in-out;}
.swiper-pagination[data-v-6952ff60]{background:red;}
.swiper-pagination[data-v-6952ff60]  .swiper-pagination-bullet-active{
width:12px;
}
.btn{width:8px;height:8px;background:black;border-radius: 5px;display:inline-block;}
.btn.active{background:greenyellow;}
/* .swiper-pagination-custom-active{background:green;display:inline-block;} */
</style>
<script>

import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import {swiper,swiperSlide } from 'vue-awesome-swiper'
export default {
   data(){
       return{
          swiperOption: {
                notNextTick: true,
                  loop:true,
                  autoplay:false,
                  effect:'coverflow',  
                  slidesPerView: 3,
                  centeredSlides: true,
                  pagination: {
                      el:'.swiper-pagination',
                      type:'custom',
                  },            
            }
       }
     
   },
    components: {
      swiper,
      swiperSlide
    },
   mounted () {
      
   }  
}
</script>

