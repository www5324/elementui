<template>
    <div>
        <form id="formId">
			<div>
				<label>名字：</label><input type="text" id="name" v-model="form.name">			
			</div>
			<div>
				<label>密码：</label><input type="password" id="password" v-model="form.password" >			
			</div>
			<div>
				<label>地址：</label><input type="text" id="address" v-model="form.address">			
			</div>
	    </form>
        <a href="javascript:" id="into" @click="reg">注册</a>
    </div>
</template>
<script>
import axios from 'axios';
export default {
	name:'reg',
	 data(){
      return{
		  form:{
                name:"",
				password:"",
				address:""
		  }	
      }
	},
	methods:{
		reg(){
        //   axios.post("/api/post2",{name:this.name,password:this.password,address:this.address}).then((data)=>{
        //       console.log(data);
		//   })

		  axios.post('/api/post2',{name:this.form.name,password:this.form.password,address:this.form.address}).then((data)=>{
				if(data.status=="200")
				{
				  alert("注册成功");
				  this.form={brand_right:0}
				}
			})
		}
	}
	
}
</script>

