<template>
  <div>
    <!--<router-link to="/news/item1">item1</router-link>-->
    <!--<router-link to="/news/item2">item2</router-link>-->
    <ul>
      <li v-for="(item,index) in list">
        <router-link :to="item.path" :key="index">{{item.name}}</router-link>
      </li>
    </ul>
    <hr>
    <div>
      <h1> name:{{name}}</h1>
      <h1> 数量:{{num}}</h1>
      <h2>单价:{{price}}</h2>
      <h1> 总价:{{count}}</h1>
      <button @click="$store.commit('add')">Add</button>
    </div>
    <hr>
    <div v-show="isTopic" style="width: 100px;height: 100px;background-color:#29b8f8"></div>
    <button @click="test2">异步测试</button>
    <router-view></router-view>
    <!--<div class="box"></div>-->
    <!--<button @click="test">test</button>-->
  </div>
</template>

<script>
  import {mapActions,mapGetters,mapMutations,mapState} from "vuex"
  // import axios from 'axios'
  export default {
    data () {
      return {
        list:[
          {name:"item1",path:"/news/item1"},
          {name:"item2",path:"/news/item2"}
        ]
      }
    },
    // beforeCreate(){
    //   console.log("哈哈");
    // },
    // beforeRouteEnter(to,from,next){
    //
    //   next({path:"/test"});
    //   console.log("路由进入触发")
    // },
    // beforeRouteLeave(to,from,next){
    //   next();
    //   console.log("路由离开触发");
    // },
    // beforeRouteUpdate(to,from,next){
    //   console.log("子路由进入触发");
    //   next()
    // }
    mounted(){
      // this.$apis.getTopics().then((res)=>{
      //   console.log(res);
      // })
      // this.$apis.getItem().then((res)=>{
      //   console.log(res);
      // })
      // axios.all([this.$apis.getTopics(), this.$apis.getItem()])
      //   .then(axios.spread(function (acct, perms) {
      //     // 两个请求现在都执行完成
      //   }));
      // this.$apis.getPhp().then((res)=>{
      //   console.log(res);
      // })
    },
    methods:{
      // test(){
      //   this.$eventHub.$emit('test','hahaha')
      // }
      ...mapMutations(['add']),
      ...mapActions(['test2'])
    },
    computed:{
      ...mapState(['name','price','num','isTopic']),
      ...mapGetters(['count'])
    }
  }
</script>

<style scoped lang="scss">
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .box{
    width:r(200);
    height:r(200);
    background-color:#29b8f8;
  }
</style>
