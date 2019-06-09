<template>
    <el-container>
      <el-aside width="200px"><Menu></menu></el-aside>
      <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main><Mianbao></Mianbao></el-main>
      </el-container>
    </el-container>
</template>

<script>
import Header from "../components/Header.vue";
import Mianbao from "../components/Mianbao.vue";
import Menu from "../components/Menu.vue";
export default {
    components:{
        Header,
        Mianbao,
        Menu
    }
};
</script>

<style>
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
body > div > .el-container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
