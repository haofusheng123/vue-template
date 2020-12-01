<template>
  <div class="slot-item">
    <div @click="routerChange">
      <div class="item-img">
        <slot name="slot-img"></slot>
      </div>
      <slot name="slot-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "router-item",
    props:{
      message:{
        type:String,
        default:'主页'
      },
      path:{
        type:String,
        default: '/home'
      }
    },
    methods:{
      routerChange(){
        this.$router.replace(this.path);
      }
    }
  }
</script>

<style scoped>
  .slot-item{
    flex: 1;
    text-align: center;
  }
  .item-img img{
    height: 24px;
  }
</style>
