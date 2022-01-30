<template>
  <div id="app">
    <header-module></header-module>
    <div id="v-content" v-bind:style="{minHeight: Height+'px'}"><router-view /></div>
    <footer-module></footer-module>
  </div>
</template>

<script>
import FooterModule from './components/footerModule.vue';
import headerModule from './components/headerModule.vue';
export default {
  components: { headerModule, FooterModule },
  name: "App",
  data(){
    return{
      Height: 0
    }
  },
  mounted(){
    //动态设置内容高度 让footer始终居底   header+footer的高度是100
    this.Height = document.documentElement.clientHeight - 300;
　　//监听浏览器窗口变化　
    window.onresize = ()=> {this.Height = document.documentElement.clientHeight -100}
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}

body{
  background-color: #f5f7f9;
}
</style>
