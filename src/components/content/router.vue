<template>
  <div class="router-slot">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "router"
  }
</script>

<style scoped>
  .router-slot{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
  }
</style>
