import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        'loginoff':sessionStorage.getItem("loginoff")?sessionStorage.getItem("loginoff"):false,
        'loginuse':sessionStorage.getItem("name"),        
         count:1
        //放置公用状态
    },
    mutations:{
        add:function(state){
            state.count++;
        },
        remove:function(state){
           state.count--;
        },
        seinfo(state,usename)
        {
            state.loginuse=usename,
            state.loginoff=true,
            sessionStorage.setItem("name",usename);
            sessionStorage.setItem("loginoff",true);
            var obj={}
           
        },
        quit(state,usename)
        {
            state.loginuse="",
            state.loginoff=false,
            sessionStorage.removeItem("name"); 
            sessionStorage.setItem("loginoff",false);           
        }
    }, 
    getters:{
        loginused:function(state)
        {
            return state.loginuse+"先生！"
        }
    },
    actions:{
        actionadd:function(context){
            context.commit('add')
        },
        actionremove:function({commit}){
            commit('remove')
        }
    }   
});