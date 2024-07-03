const express = require('express')
const cors = require ('cors')
const app = express()


require('dotenv').config()

const notificaRouters = require ("./routes/notificaRoutes.js")

const port = process.env.PORT || 3000;


app.use(express.json())

/*app.use('/form',(req, res)=>{
    res.sendFile("D:\\Divino\\JS\\projeto_notifica_whats\\index.html")
})*/


app.use(express.static('D:\\Divino\\JS\\projeto_notifica_whats'))



app.use('/notifica',notificaRouters)

app.listen(port,()=>{
    console.log('O servidor esta rodando na URL http://localhost:'+port);
})






