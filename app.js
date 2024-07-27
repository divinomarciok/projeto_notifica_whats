const express = require('express')
const cors = require ('cors')
const app = express()

require('dotenv').config()

const notificaRouters = require ("./routes/notificaRoutes.js")
upload = require('./config/multer.js')

const port = process.env.PORT || 3000;

app.use(express.json())

app.use(express.static(__dirname))


app.use('/notifica',notificaRouters)

app.listen(port,()=>{
    console.log('O servidor esta rodando na URL http://localhost:'+port);
})






