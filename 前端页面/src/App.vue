<template>
  <div id="app">
    <div class="nav-area">
      <NavBar_PC id="nav-pc"></NavBar_PC>
      <NavBar_Phone id="nav-phone"></NavBar_Phone>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar_PC from './components/NavBar_PC.vue';
import NavBar_Phone from './components/NavBar_Phone.vue';
import axios from 'axios'

export default {
  name: 'App',
  components:{
    NavBar_PC,NavBar_Phone
  },
}
</script>

<style lang="less">
  #app{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .nav-area{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0;
    z-index: 10;
  }
  #nav-phone{
    display: none;
  }
  @media only screen and (max-width: 700px){
		#nav-pc{
      display: none;
    }
    #nav-phone{
      display: block;
    }
  }
</style>
