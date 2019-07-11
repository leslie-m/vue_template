<template>
  <div>item1</div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted(){
      this.$apis.getJson().then((res)=>{
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
