<template>
    <div>
        用户管理1
        <div ref="get" style="width:120px" @click="mdclick">
            <div>
                <div v-for="(item,index) in form.list" :key="index">
                    {{item}}
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
export default {
    data(){
        return{
            form:{
                list:[1,3,4,5],
            }
        }
    },
    methods: {
        mdclick(){
            this.$nextTick(()=>{
                var get=this.$refs.get;
                console.log(get.getElementsByTagName("div"));
            })          
        }
    }
}
</script>


