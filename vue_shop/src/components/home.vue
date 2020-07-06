<!--
 * @Author: your name
 * @Date: 2020-07-02 21:21:03
 * @LastEditTime: 2020-07-06 20:22:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop\src\components\home.vue
--> 
<template>
  <el-container class="home_container">
    <el-header>
      <div>
        <span>电商后台管理系统</span>
      </div>
      <el-button @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      // 清空token
      window.sessionStorage.clear();
      // 跳转到登录页
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 1%;
  align-items: center;
  color: #fff;
  font-size: 30px;
  > div {
    display: flex;
    align-items: center;
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
</style>