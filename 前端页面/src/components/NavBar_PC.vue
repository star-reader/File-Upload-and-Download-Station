<template>
  <div>
    <el-menu
  default-active="View"
  class="el-menu-demo"
  mode="horizontal"
  router
  background-color="#1E90FF"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item style="font-size:20px;font-weight: bold;" index="/">高三十班文件资源处理中心程序</el-menu-item>
  <el-menu-item style="font-size:18px" index="Index">文件查看</el-menu-item>
  <el-menu-item style="font-size:18px" index="Upload">资源发布</el-menu-item>
  <el-menu-item style="font-size:18px" index="About">关于程序</el-menu-item>
</el-menu>
  </div>
</template>

<script>
export default {
    name:'NavBar_PC',
}
</script>

<style lang="less" scoped>

</style>