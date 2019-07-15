import Vue from 'vue';
import Vuex from 'vuex';
import apis from '@/core/api'
import { Indicator } from 'mint-ui';
Vue.use(Vuex);
//理解为 组件内部  data 属性
const state={
  name:'葡萄',
  num:0,
  price:10,
  topic:[],
  isTopic:false
}
//定义  methods 同步方法   视图调用     this.$store.commit("xxxx",val)
const mutations={
  add(state,num){
    state.num++;
  }
}
// 定义 compunted  属性计算
const getters={
  count(state){
    return state.num*state.price;
  }
}
//定义 异步方法 通用接口调用    视图调用     this.$store.dispatch("xxxx",val)
const actions={
  test(context,data){
    // console.log(context);
    // console.log(data);
    context.dispatch('test1',data)
  },
  test1(context,data){
    console.log(data)
  },
  getApis(context,data){
    apis.getTopics().then((res)=>{
      // console.log(res.data.data);
      setTimeout(()=>{
        context.state.topic=res.data.data
        context.state.isTopic=true
        // console.log(context.state.topic);
      },2000)
    })
  },
  test2(context,data){
    Indicator.open('加载中...')
    setTimeout(()=>{
      Indicator.close();
      context.state.isTopic=true
    },3000)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
