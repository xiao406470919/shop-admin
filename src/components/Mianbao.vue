<template>
  <div class="mianbao">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">后台管理</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">商品管理</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mianbao {
  padding-bottom: 10px;
  border-bottom: 1px #ddd solid;
}
</style>
