<template>
  <div class="mianbao">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in info" :key='index'>{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data(){
    return {
      info:[]
    }
  },
  watch:{
    $route(){
      console.log(this.$route);
      this.getRouter()
      console.log(this.info);
    }
  },
  mounted(){
    this.getRouter()
  },
  methods:{
    getRouter(){
      const arr= this.$route.matched
      let info=[]
      arr.forEach(element => {
        info.push(element.meta)
      });
      this.info=info
    }
  }
};
</script>
<style>
.mianbao {
  padding-bottom: 10px;
  border-bottom: 1px #ddd solid;
  margin-bottom: 20px
}
</style>
