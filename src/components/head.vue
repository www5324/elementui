<template>
    <div >
        <header class="fbox">
            <div class="container">
               <div>
                 {{$store.state.loginuse}}
                 <a href="javascript:" @click="lgquit()">退出</a>
              </div>
               <a href="javascript:"><img src="../../static/img/finwiselogo.png"/></a>
            </div>
        </header>
        <div class="container">
            <div class="wendu">
                <div>{{yifu}}</div>
                <a href="javascript:" @click="add()">+</a>
                <a href="javascript:" @click="reduce()">-</a>
            </div>
            <div>
               <h3>按日期</h3>  
                <ul>
                    <li v-for="(item,index) in sortdata" :key="index">
                        {{item.name}}
                    </li>
                </ul>
           </div>
           <div>
               <h3>按顺序排</h3>
            <ul>
                <li v-for="(item,index) in sortitem" :key="index">
                     {{item}}
                </li>
            </ul>
            </div>
             <div>
               <h3>按文件大小序排</h3>
                <ul>
                   <li v-for="(item,index) in sortname" :key="index">
                      {{item.name}}
                   </li>
                </ul>
             </div>
             <div>
               <h3>按文件大小序排</h3>
                <ul>
                   <li v-for="(item,index) in sortnsize" :key="index">
                      {{item.name}}
                   </li>
                </ul>
             </div>
        </div>
    </div>
</template>
<style scoped>
ul,
li {
  list-style: none;
}
@media (min-width: 1400px) {
  .fbox > .container {
    width: 1400px;
  }
}

.fbox > .container {
  position: relative;
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
.container,
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
}
.container,
.container-fluid {
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
.fbox a {
  float: left;
}
</style>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
  data() {
    return {
      wendu: 18,
      yifu: "外套",
      arr: [
        { name: "wujia1",data:"2017-08-13"},
        { name: "heru",data:"2017-08-11"},
        { name: "zhang",data:"2017-08-5"},
        { name: "zhangyin",data:"2017-06-5"},
        { name: "wang",data:"2017-07-5"}
      ],
      arrs: [50, 19, 20, 30, 5],
      arrname: [
        { name: "wujia1",data:"2017-08-13"},
        { name: "heru",data:"2017-08-11"},
        { name: "zhang",data:"2017-08-5"},
        { name: "zhangyin",data:"2017-06-5"},
        { name: "wang",data:"2017-07-5"}
      ],
      arrsize: [
        { name: "wujia1",data:"2017-08-13",size:"1024"},
        { name: "heru",data:"2017-08-11",size:"201151100"},
        { name: "zhang",data:"2017-08-5",size:"20115156114"},
        { name: "zhangyin",data:"2017-06-5",size:"201151144551"},
        { name: "wang",data:"2017-07-5",size:"201151144551586"}
      ],
    };
  },
  watch: {
    wendu: function(val) {
      if (val > 24) {
        this.yifu = "短袖";
      } else if (val < 12) {
        this.yifu = "棉衣";
      }
    }
  },
  methods: {
    ...mapMutations(['quit']),
    add() {
      this.wendu++;
    },
    reduce() {
      this.wendu--;
    },
    lgquit(){
         this.quit()
         this.$router.push({
                                    path:'/login',
                                  });  
    }
  },
  computed: {
    sortitem: function() {
      return this.arrs.sort(function(a, b) {
        return b - a;
      });
    },   
    sortdata:function(){
        return this.arr.sort(function(a,b){
               console.log((a.data));               
               return  Date.parse(a.data)-Date.parse(b.data)
        });        
    },
    sortname:function(){        
        return this.arrname.sort(function(a,b){                               
               return  a["name"].localeCompare(b["name"]);
        });        
    },
    sortnsize:function(){        
        return this.arrsize.sort(function(a,b){                               
               return  parseInt(a.size)-parseInt(b.size);
        });        
    },
        
  },
  mounted() {}
};

//数组对象方法排序:
function sortByKey(array, key) {
  return array.sort(function(a, b) {
      console.log("sort中的："+a+b);
    var x = a[key];
    var y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}
</script>