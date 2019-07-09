<template>
  <div>
    <div>test</div>
    <button v-test>test</button>
    <item1></item1>
  </div>

</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted(){
      // console.log(this.$route.query);
      // console.log(this.$route.params);
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
