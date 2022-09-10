const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')
app.use(cors())


app.post('/UploadFile',(req,res)=>{
    // 路由接口post：上传文件
    let filename = req.query.filename
    let data = ''
    req.on('data',(chunk)=>{
        data += chunk
    })
    req.on('end',()=>{
        let fileBase64 = data
        //从base64转成buffer
        fs.writeFile(`${__dirname}/file_data/${filename}.txt`,fileBase64,(err)=>{
            if (err){
                return res.send('failed to upload target file')
            }
            return res.send('successfully upload file to server')
        })
    })
})

app.get('/getFileList',(req,res)=>{
    // 路由接口get：获取文件列表
    fs.readFile('list.json',(err,data)=>{
        if (err) return res.send('filed to fetch json')
        console.log(data.toString())
        let fileList = JSON.parse(JSON.stringify(data.toString()))
        //你问我为啥用两次parse？我也不知道，反正一次不好使，我也不知道为啥
        res.send(JSON.parse(fileList))
    })
})

app.post('/updateListJson',(req,res)=>{
    let data = JSON.stringify(req.query.json)
    let dataBuffer = Buffer.from(data,'utf-8')
    fs.writeFile('list.json',dataBuffer,(err)=>{
        if (err){
            return res.send('failed to update list-related json file')
        }else{
            return res.send('successfully update list-related json file')
        }
    })
})

app.get('/getDownloadFile',(req,res)=>{
    let filename = req.query.filename
    fs.readFile(`${__dirname}/file_data/${filename}.txt`,(err,data)=>{
        if (err) return res.send('failed to fetch')
        res.send(data.toString())
    })
})

app.listen('8888',()=>{
    console.log('Server running on port 8888')
})