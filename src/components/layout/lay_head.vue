<template>
  <div>
    <h1>HelloWorld</h1>
    <ul>
      <li v-for="(item,index) in pathList" :key="index">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
    <div>
      <h1> name:{{$store.state.name}}</h1>
      <h1> 数量:{{$store.state.num}}</h1>
      <h1> 总价:{{$store.getters.count}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pathList:[
          {name:"info",path:"/"},
          {name:"news",path:"/news"},
          {name:"test",path:"/test"},
        ]
      }
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
