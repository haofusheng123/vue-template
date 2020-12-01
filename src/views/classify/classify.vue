<template>
  <div>
    <h2>分类界面</h2>
    <p>分类内容</p>
    <router-link to="/classify/men">男装</router-link>
    <router-link to="/classify/women">女装</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "classify"
  }
</script>

<style scoped>

</style>
