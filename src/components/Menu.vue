<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>购物商场</span>
        </template>
        
        <el-menu-item index="1-1">
          <template slot="title">商品管理</template>
        </el-menu-item>
        <el-menu-item index="1-2">
          <template slot="title">栏目管理</template>
        </el-menu-item>
      </el-submenu>

    </el-menu>
</template>

<script>
export default {};
</script>

<style scoped>
.el-menu-vertical-demo{
    height: 100%;
}
</style>
