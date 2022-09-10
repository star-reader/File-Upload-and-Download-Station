# File-Upload-and-Download-Station
a simple web program for file upload/download in school

为学校设计的简单的文件上传/下载中心程序

# 安装说明
1、克隆当前分支
## 前端页面
下载后在目录执行   ```npm install```

依赖安装完成后执行   ```npm run serve```，程序将执行在localhost:8080

如需打包项目，请执行   ```npm run build```，生成文件位于dist目录

## 后端文件

```npm install```

```node server.js```

端口号和对应http路径请自行修改

后端文件是否引用cors请自行根据跨域规则修改

如需要则使用   ```app.use(cors())```

否则删除   ```app.use(cors())```以及上方  ```const cors = require('cors')```即可
