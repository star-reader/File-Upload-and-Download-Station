<template>
  <div class="phone">
    <!-- 手机版顶部导航栏 -->
    <div class="fold-nav-main">
        <div @click="openNavList" class="operate-buttom">
            <i class="el-icon-s-operation"></i>
        </div>
        <span class="content">
            高三十班文件资源处理中心程序
        </span>
    </div>
    <!-- 手机版导航栏展开的列表 -->
    <div class="nav-list">
        <div class="item" @click="toTargetPage('Index')">文件查看</div>
        <div class="item" @click="toTargetPage('Upload')">资源发布</div>
        <div class="item" @click="toTargetPage('About')">关于程序</div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
    name:'NavBar_Phone',
    methods:{
        openNavList(){
            $('.nav-list').css('display','block')
        },
        toTargetPage(page){
            $('.nav-list').css('display','none')
            if (this.$route.name == page){
                //路由页面相同，不跳转，函数直接返回
                return
            }
            this.$router.push(page)
        }
    }
}
</script>

<style lang="less" scoped>
.fold-nav-main{
    position: relative;
    background-color: rgb(30,144,255);
    height: 50px;
    .operate-buttom{
        padding: 10px;
        position: relative;
        left: 10px;
        font-size: 26px;
        color: white;
        line-height: 50px;
        display: inline;
    }
    .content{
        position: relative;
        color: white;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
        padding-left: 10px;
    }
}
.nav-list{
    display: none;
    height: 200px;
    .item{
        color: #ffd04b;
        padding: 15px 30px;
        transition-duration: 0.4s;
        background-color: rgb(30,144,255);
    }
    .item:hover{
        background-color: rgb(12, 120, 228);
    }
}
</style>