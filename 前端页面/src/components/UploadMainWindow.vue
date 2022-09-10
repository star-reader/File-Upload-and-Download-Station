<template>
    <div class="upload-border" :id="type">
        <div @click="closeFileUploader" class="close">
            <i class="el-icon-circle-close"></i>
        </div>
        <div class="main-area">
            <span>请输入文件名称，可不填写(不填写则使用默认名称)</span>
            <el-input style="position: relative;width: 60%;padding-bottom: 20px;" v-model="fileName" placeholder="请输入文件名称"></el-input>
            <el-upload
                class="upload-demo"
                :accept="getAcceptType()"
                drag
                :before-upload="addFile"
                action="http://121.5.10.201:8014/upload/">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip">{{getDisplayText()}}</div>
            </el-upload>
            <el-button type="success" @click="uploadNow">上传</el-button>
        </div>
    </div>
  </template>
  
  <script>
import $ from 'jquery'
import axios from 'axios'

export default {
      name:'UploadMainWindow',
      props:['data','type'],
      data(){
        return{
            fileName:'',
            fileStreamBase64:'',
            flag:false,
        }
      },
      methods:{
        blobToBase64(blob) {
            //把上传文件的blob流转为base64流
				return new Promise((resolve, reject) => {
					const fileReader = new FileReader();
					fileReader.onload = (e) => {
						resolve(e.target.result);
					};
					// readAsDataURL
					fileReader.readAsDataURL(blob);
					fileReader.onerror = () => {
						reject(new Error('blobToBase64 error'));
					};
				});
		},
        getRandomString(length){
            //获取随机字符串，用于文件唯一id的生成
            let x='AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
            let str = ''
                for(let i=0;i<length;i++){
                    str +=  x[parseInt(Math.random()*x.length)]
                }
            return str
        },
        closeFileUploader(){
            $(`#${this.type}`).css('display','none')
        },
        getAcceptType(){
            //获取可接受的文件格式
            if (this.type == 'image'){
                return 'image/*'
            }else{
                return '*/*'
            }
        },
        getDisplayText(){
            if (this.type == 'image'){
                return '只能上传图片类型的文件，且不超过15M'
            }else{
                return '文件大小不超过15M'
            }
        },
        addFile(e){
            this.flag = false
            if (e.size > 16516000){
                // 文件过大，取消上传
                return this.$message.error('上传文件体积过大！')
            }
            if (this.fileName == ''){
                //未填写文件名称，使用默认名称
                this.fileName = e.name
            }
            let fileBlob = e
            console.log(fileBlob)
            this.blobToBase64(fileBlob).then(res =>{
                //函数blobToBase64返回的是promise对象
                this.fileStreamBase64 = res
            })
        },
        uploadNow(){
            if (!this.fileName || !this.fileStreamBase64) return
            $(`#${this.type}`).css('display','none')
            axios.post(`http://localhost:8888/UploadFile?filename=${this.fileName}`,this.fileStreamBase64).then(res =>{
                if (res.data == 'successfully upload file to server'){
                    //更新list
                    this.data.push(
                        {"id":this.getRandomString(10),"label":this.fileName}
                    )
                    this.updateList()
                    this.$message.success('上传成功')
                    
                }else{
                    this.$message.error('上传失败')
                }
            }).catch(error =>{
                this.$message.error('上传失败')
                console.log(error)
            })
        },
        updateList(){
            axios.post(`http://localhost:8888/updateListJson?json=${JSON.stringify(this.data)}`).then(res =>{
                if (res.data == 'failed to update list-related json file'){
                    this.$message.error('文件列表更新失败')
                }
            }).catch(error =>{
                this.$message.error('文件列表更新失败')
            })
        }
      },
  }
  </script>
  
  <style lang="less" scoped>
  .upload-border{
    position: absolute;
    z-index: 8;
    width: 60%;
    height: 400px;
    left: 20%;
    top: 200px;
    border-radius: 8px;
    background-color: aliceblue;
    animation: showUpload 0.5s;
    display: none;
    .close{
        position: relative;
        top: 10px;
        left:calc(100% - 40px);
        height: 30px;
        font-size: 26px;
        color: red;
        cursor: pointer;
    }
    .main-area{
        position: relative;
        text-align: center;
        top: 20px;
    }
  }
  @keyframes showUpload {
    0%{
        transform: scale(0.3);
    }
    100%{
        transform: scale(1);
    }
  }
  </style>
  <style>
    .el-upload-dragger{
        position: absolute;
        width: 80%;
        left: 10%;
    }
  </style>