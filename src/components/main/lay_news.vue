<template>
  <div>
    <!--<router-link to="/news/item1">item1</router-link>-->
    <!--<router-link to="/news/item2">item2</router-link>-->
    <ul>
      <li v-for="(item,index) in list">
        <router-link :to="item.path" :key="index">{{item.name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
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
      this.$apis.getTopics().then((res)=>{
        console.log(res);
      })
      this.$apis.getItem().then((res)=>{
        console.log(res);
      })
      axios.all([this.$apis.getTopics(), this.$apis.getItem()])
        .then(axios.spread(function (acct, perms) {
          // 两个请求现在都执行完成
        }));
    }
  }
</script>

<style scoped>
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
</style>
