<template>
  <div>
    <h2>主页内容</h2>
    <div>主页内容</div>
    <div>{{$route.query.name}}</div>
    <br>
    <button @click="decreaseNum">-</button>
    <span>{{$store.state.num}}</span>
    <button @click="increaseNum">+</button><br>
    <div>{{$store.getters.squareNum}}</div>
  </div>
</template>

<script>

  import {request} from 'network/request';
  export default {
    name: "home",
    methods:{
      increaseNum(){
        this.$store.commit('increase');
      },
      decreaseNum(){
        this.$store.commit('decrease');
      }
    }
  }
  request({
    url:'/show',
    params:{
      id:1002
    }
  }).then(function (data) {
    console.log(data);
  });

</script>

<style scoped>

</style>
