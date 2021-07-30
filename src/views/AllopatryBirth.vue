<template>
  <div class="html">
    <el-container>
      <el-aside width="200px">
        <Left></Left>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
import Left from '../components/Left.vue'

export default {
  name: "AllopatryBirth.vue",
  components: {Left}
}
</script>

<style scoped>

.html{
  height: 100%;
  width: 100%;
  position: fixed;
}

.el-aside {
  background-color: rgb(18,48,102);
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 970px;
  margin-left: -8px;
  margin-top: -8px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 970px;
  margin-top: -8px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>