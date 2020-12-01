<template>
  <div id="app">
    <router-view></router-view>
<!--    <h2>主页内容</h2>-->
<!--    <P>主页内容</P>-->

<!--    <router-link :to="{path:'/home',query:{name:'haofusheng',age:20}}">主页</router-link>-->
<!--    <router-link to="/classify">分类</router-link>-->
<!--    <router-link to="/shopping">购物车</router-link>-->
<!--    <router-link v-bind:to="'/self'+user">我的</router-link>-->

    <router-outer>
      <routerItem path="/home">
        <img slot="slot-img" src="~assets/logo.png">
        <div slot="slot-text">主页</div>
      </routerItem>
      <routerItem path="/classify">
         <img slot="slot-img" src="~assets/logo.png">
        <div slot="slot-text">分类</div>
      </routerItem>
      <routerItem path="/shopping">
         <img slot="slot-img" src="~assets/logo.png">
        <div slot="slot-text">购物车</div>
      </routerItem>
      <routerItem path="/self">
         <img slot="slot-img" src="~assets/logo.png">
        <div slot="slot-text">我的</div>
      </routerItem>
    </router-outer>

  </div>
</template>

<script>
  import routerItem from 'components/content/router-item'
  import routerOuter from 'components/content/router'
  const app = {

    name: 'App',
    data(){
      return {

      }
    },
    components:{
      routerItem,
      routerOuter
    }
  };

  export default app;
</script>

<style>

</style>
