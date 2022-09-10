<template>
<div>
        <div class="display-list-area-pc">
        <!-- 电脑版左侧文件导航栏 -->
    <el-tree
        :data="fullList"
        node-key="id"
        accordion
        ref='tree'
        :expand-on-click-node="true"
        :render-content="renderContent">
    </el-tree>
    </div>
    <div class="display-list-phone">
        <el-tree
        :data="fullList"
        node-key="id"
        accordion
        ref='tree'
        :expand-on-click-node="true"
        :render-content="renderContent">
    </el-tree>
    </div>

</div>
</template>

<script>
import axios from 'axios'
import {downloadFileByBase64} from '@/tools/download'

export default {
    name:'Index',
    data(){
        return {
            fullList:[]
        }
    },
    methods:{
        renderContent(h, { node, data, store }) {
            //渲染tree组件的按钮
            return (
            <span class="custom-tree-node">
                <span>{node.label}</span>
                <span>
                <el-button type="primary" on-click={ () => this.previewPic(data.label) }>预览</el-button>
                <el-button type="success" on-click={ () => this.downloadData(data.label) }>下载</el-button>
                </span>
            </span>);
      },
      previewPic(data){
        console.log(data)
        this.$message.error('预览不了一点！请下载后查看')
      },
      downloadData(data){
        this.$message.success('开始准备下载，文件加载需要2-10秒，请稍等~')
        axios.get(`http://localhost:8888/getDownloadFile?filename=${data}`).then(res =>{
            if (res.data == 'failed to fetch'){
                this.$message.error('无法读取文件')
            }
            downloadFileByBase64(res.data,data)
        }).catch(error =>{
            this.$message.error('无法读取文件')
            console.log(error)
        })
      }
    },
    mounted(){
        axios.get('http://localhost:8888/getFileList').then(res =>{
            this.fullList = res.data
        }).catch(error =>{
            this.$message.error('获取文件列表失败！')
            console.log(error)
        })
    },
}
</script>

<style lang="less" scoped>
.display-list-area-pc{
    position: absolute;
    left: 0;
    min-width: 400px;
    top: 60px;
    height: calc(100% - 60px);
    overflow: auto;
}
.display-list-phone{
    display: none;
    position: absolute;
    left: 0;
    width: 100%;
    top: 50px;
    overflow: auto;
}
@media only screen and (max-width: 700px){
    .display-list-area-pc{
      display: none;
    }
    .display-list-phone{
      display: block;
    }
  }
.preview-area{
    position: relative;
    float: left;
    background-color: aquamarine;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
</style>
<style>
 .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .el-tree-node {
    white-space: nowrap;
    outline: 0;
    padding: 10px;
}
</style>