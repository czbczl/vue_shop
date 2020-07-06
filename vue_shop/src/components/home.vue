<!--
 * @Author: your name
 * @Date: 2020-07-02 21:21:03
 * @LastEditTime: 2020-07-02 21:52:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop\src\components\home.vue
--> 
<template>
  <div>
    <el-button @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  data() {},
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
</style>