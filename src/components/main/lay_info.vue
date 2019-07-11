<template>
  <div>info
    <!--<router-link to="/test">Totest</router-link>-->
    <!--<router-link :to="{path:'/test',query:{id:'443321'}}">Totest</router-link>-->
    <!--<router-link :to="{name:'test',params:{id:'443321'}}">Totest</router-link>-->
    <button @click="add">Add</button>
    <button @click="test">test</button>
  </div>
</template>

<script>
  import axios from "axios"
  import {mapActions,mapGetters,mapMutations,mapState} from "vuex"
  export default {
    data () {
      return {
        topic:[]
      }
    },
    methods:{
      test(){
        //console.dir(this.$router)
        // this.$router.push("/test")
        // this.$router.push({path:'/test',query:{id:'443321'}})
        // this.$router.push({name:'test',params:{id:'443321'}})
        this.$store.dispatch("getApis")
      },
      add(){
        this.$store.commit("add",)
      }

    },
    mounted(){
      // this.num=this.$store.state.num
      // console.log(this.$store);
      // console.log(this.$global.getParam());
      // this.$apis.getTopics().then((res)=>{
      //   console.log(res);
      // })
      // this.$eventHub.$on("test",(res)=>{
      //   alert(res)
      // })
      // this.topic=this.$store.state.topic
  },
    computed:{
      ...mapState(['isTopic'])
    },
    watch:{
      isTopic(){
        this.topic=this.$store.state.topic
        console.log(this.topic);
      }
    },
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
