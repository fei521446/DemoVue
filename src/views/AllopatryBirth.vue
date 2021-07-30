<template>
  <div class="html">
    <el-container>
      <el-aside width="200px">
        <Left></Left>
      </el-aside>
      <el-main>
        <template>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="材料信息" name="first">材料信息</el-tab-pane>
            <el-tab-pane label="基本信息" name="second">基本信息</el-tab-pane>
          </el-tabs>
        </template>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Left from '../components/Left.vue'

export default {
  name: "AllopatryBirth.vue",
  components: {Left},
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
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