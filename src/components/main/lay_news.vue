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
    //   console.log(2);
    // },
    // beforeRouteEnter(to,from,next){
    //   // to.path="/test"
    //   next();
    //   console.log(1)
    // },
    // beforeRouteLeave(to,from,next){
    //   next()
    // },
    // beforeRouteUpdate(to,from,next){
    //   console.log("update");
    //   next()
    // }
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
