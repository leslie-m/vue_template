<template>
  <div>info
    <!--<router-link to="/test">Totest</router-link>-->
    <!--<router-link :to="{path:'/test',query:{id:'443321'}}">Totest</router-link>-->
    <!--<router-link :to="{name:'test',params:{id:'443321'}}">Totest</router-link>-->
    <button @click="test">Totest</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods:{
      test(){
        //console.dir(this.$router)
        // this.$router.push("/test")
        // this.$router.push({path:'/test',query:{id:'443321'}})
        // this.$router.push({name:'test',params:{id:'443321'}})
      }
    },
    mounted(){
      // console.log(this.$global.getParam());
      this.$apis.getTopics().then((res)=>{
        console.log(res);
      })
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
