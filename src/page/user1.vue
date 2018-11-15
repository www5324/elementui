<template>
    <div>
        用户管理1
        <a href="javascript:" @click="mast()">点击</a>
        <a href="javscript:" @click="mast2()">点击2</a>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'index',
    data(){
      return{
        fdata:'',
        vdata:'111',
        dataurl:"userapi/findMailList"
      }
    },
    methods:{
            mast(){
                axios.post("/apis/api/userapi/findMailList ",function(res){
                    console.log(res);
                } )
              .then(function (response) {
                console.log(response);
              })
        },
        mast2()
        {
             axios.post("/api/post4",function(res){
                    console.log(res);
                } )
              .then(function (response) {
                console.log(response);
              })
        }

    },
    

}
</script>

