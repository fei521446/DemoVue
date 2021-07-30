<template>
  <div>
    <el-menu
        class="el-menu-vertical-demo"
        text-color="#fff"
        background-color=rgb(18,48,102)
        active-text-color="#ffd04b"
        :default-openeds="['1']">
      <el-submenu index="1" >
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Left.vue",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
</style>