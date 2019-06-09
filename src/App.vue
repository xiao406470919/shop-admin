<template>
  <div id="app">
    index
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
// import axios from "axios";

export default {
 mounted(){
  //  axios({
  //    url:'https://api.github.com/users',
  // method:'GET',
  //  }).then(res=>{
  //    console.log(res);
  //  })

   this.$axios({
      url:'https://api.github.com/users',
      method:'GET',
   }).then(res=>{
    return  console.log(res);
   })
 }
}
</script>

<style scoped>

</style>
