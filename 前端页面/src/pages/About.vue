<template>
    <div class="container">
        <div class="title">· 开发笔记</div>
        <div class="content">
        灵感起源于钉钉登录传文件速度慢，且破旧的电脑硬件导致其加载过程很卡。 <br>
        项目本身早有规划，只是上一个版本写到一半被我删了 <br>
        <hr>
        前不久偶然又想起了这个被搁置的项目，于是利用我有限的web全栈开发知识和经验，制作了这样一款简约的文件资源处理程序 <br>
        使用Vue+Element UI开发前端，Node.js+Express框架开发后端，纯手敲代码，耗时一天半完成<br> <br>
        <div class="title">· 功能特点</div>
        <div class="content">
            1：简约的页面设计 <br>
            2：文件便捷快速上传/下载 <br>
            3：上传后列表实时更新，无需手动重启/刷新 <br>
            4：响应式设计，适应手机和电脑等不同尺寸大小屏幕的导航栏 <br>
            5：貌似没了
        </div> <br>
        <div class="title">· 开发者说明</div>
        <div class="content">
            本程序相应源代码已经开源，请访问 <a href="https://github.com/star-reader" target="__black"><em style="color:rgb(64,158,255)">我的Github主页</em></a>  查看 <br>
            正所谓“一箪食，一瓢饮，一个bug修一天”，新的功能往往会带来新的bug，如果有bug我也许回去gg更新程序
        </div> <br>
        <div class="title">· 开发鸣谢</div>
        <div class="content">
            本程序作为免费的开源程序，感谢所有为本代码开源社区做出贡献的开发者们： <br>
            <el-card class="box-card">
            <div class="text item">Vue.js</div>
            <div class="text item">Element UI</div>
            <div class="text item">axios</div>
            <div class="text item">Node.js</div>
            <div class="text item">Express</div>
            <div class="text item">less</div>
            </el-card>
        </div>
        <br>
        <div class="footer-copyright">
            <el-card>
                <div class="row-text">Copyright &copy; 2020-2022 JCH WorkGroup. All rights reserved.</div>
            </el-card>
        </div>
  </div>
    </div>
  
</template>

<script>
export default {
    name:'About'
}
</script>

<style lang="less" scoped>
.container{
    position: absolute;
    top: 80px;
    width: 100%;
    left: 0;
    height: calc(100% - 80px);
   padding-left: 20px;
   overflow-x: hidden;
    .title{
        font-size: 22px;
        font-weight: bold;
        color: black;
    }
    .content{
        font-size: 18px;
        .box-card{
        position: relative;
        width: 300px;
    }
    }
    
    .footer-copyright{
        position: relative;
        left:30%;
        width: 40%;
        .row-text{
            color: deeppink;
            font-size: 19px;
            text-align: center;
        }
        .el-card__body{
            position: relative;
            width: 100%;
        }
    }
}
</style>