<template>
    <div>
        用户管理1
        <div ref="get" style="width:120px" @click="mdclick">
            <div>
                <div v-for="(item,index) in form.list" :key="index">
                    {{item}}
                </div>
            </div>

        <!-- <a href="javascript:" @click="mast()">点击</a> -->
        <a href="javscript:" @click="mast2()">点击2</a>
        <div>
          <form id="formd">
            <div><label>姓名：</label><input type="text" name="name" /></div>
            <input type="file" id="file" name="image2" class="uplandim" ref="upland" @change="uplandim('formd')">
            <a href="javascript:" @click="choseim()" >选择图片</a>
          </form>  

        </div>
    </div>
</template>
<style>
.uplandim {
  display: none;
}
</style>

<script>
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      fdata: "",
      vdata: "111",
      dataurl: "userapi/findMailList",
      form:{
                list:[1,3,4,5],
            }
    };
  },
  methods: {
    mast() {
      axios
        .post("/apis/api/userapi/findMailList ", function(res) {
          console.log(res);
        })
        .then(function(response) {
          console.log(response);
        });
    },
    mast2() {
      axios.post("/api/a/post4").then(function(response) {
        console.log(response);
      });
    },
    choseim() {
      this.$refs.upland.click();
      // axios.post("/apis/sqlall").then(res => {
      //   console.log(res);
      // });
    },
    uplandim(obj) {
      console.log(obj);
      var dom = document.getElementById(obj);
      var formData = new FormData(dom);
      console.log(formData);
      axios.post("/api/b/file_uploadss", formData).then(res => {
        console.log(res);
      });
    },
     mdclick(){
            this.$nextTick(()=>{
                var get=this.$refs.get;
                console.log(get.getElementsByTagName("div"));
            })          
        }
  }
};
</script>


