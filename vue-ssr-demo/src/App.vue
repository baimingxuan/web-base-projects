<template>
  <div id="app">
    <h1>vue-ssr</h1>
    <router-link class="link" to="/comp1">to comp1</router-link>
    <br>
    <router-link class="link" to="/comp2">to comp2</router-link>

    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<!--<style lang="less" scoped>-->
<!--.link {-->
<!--  margin: 10px;-->
<!--}-->
<!--.fade-enter-active, .fade-leave-active {-->
<!--  transition: all .2s ease;-->
<!--}-->
<!--.fade-enter, .fade-leave-active {-->
<!--  opacity: 0;-->
<!--}-->
<!--</style>-->
