import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        'loginuse':false,
        count:1
        //放置公用状态
    },
    mutations:{
        add:function(state){
            state.count++;
        },
        remove:function(state){
           state.count--;
        }
    }
});