<template>
  <div class="upload-weaper">
    <div class="display-area">
        <div class="card" @click="openFileUploader('image')" style="background-color: rgb(74,199,255);">
            <div class="title">图片格式上传</div>
            <div class="info">
                上传图片文件到班级服务器 <br>
                支持jpg/png/gif等多种文件格式 <br>
                最大不超过15M
            </div>
        </div>
        <div class="card" @click="openFileUploader('file')" style="background-color: rgb(255,198,46);">
            <div class="title">其他格式上传</div>
            <div class="info">
                支持ppt/doc/zip/mp3/mp4/xls等多种文件格式 <br>
                最大不超过15M
            </div>
        </div>
    </div>
    <UploadMainWindow :data="data" type="image" />
    <UploadMainWindow :data="data" type="file" />
  </div>
</template>

<script>
import UploadMainWindow from '@/components/UploadMainWindow'
import $ from 'jquery'
import axios from 'axios'

export default {
    name:'Upload',
    components:{ UploadMainWindow},
    data(){
        return {
            data:'',
        }
    },
    methods:{
        openFileUploader(target){
            $(`#${target}`).css('display','block')
        }
    },
    mounted(){
        axios.get('http://localhost:8888/getFileList').then(res =>{
            this.data = res.data
        }).catch(error =>{
            this.$message.error('获取文件列表失败！')
            console.log(error)
        })
      },
}
</script>

<style lang="less" scoped>
.display-area{
    position: absolute;
    width: 100%;
    left: 0;
    top: 90px;
    height: calc(100% - 150px);
    .card{
        float: left;
        position: relative;
        margin-left: 5%;
        width: 40%;
        height: 60%;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: 0.4s;
        .title{
            position: relative;
            color: white;
            font-size: 30px;
            padding: 10px;
            text-align: center;
            padding-top: 80px;
            font-weight: bold;
        }
        .info{
            padding: 20px;
            padding-top: 50px;
            position: relative;
            font-size: 18px;
        }
    }
    .card:hover{
        transform: scale(1.05);
    }
// 适应手机版小分辨率
@media only screen and (max-width: 700px){
	.card{
        width: 90%;
        margin-bottom: 20px;
        height: 60%;
    }
  }
}

</style>