import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
    num:0
  },
  mutations:{
    increase(state){
     state.num++;
    },
    decrease(state){
      state.num--;
    }
  },
  getters:{
    squareNum(state,getters){
      return state.num*state.num;
    }
  }
});

export default store;
