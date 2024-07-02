const express = require('express')
const cors = require ('cors')
const app = express()


require('dotenv').config()

const notificaRouters = require ("./routes/notificaRoutes.js")

const port = process.env.PORT || 3000;

function aviso (){
    
    console.log("O servidor esta rodando na porta http://localhost: VERIFICAR A PORTANO ARQUIVO .ENV")
}

app.use(express.json())

/*app.use('/notifica',(req, res) => 
    res.send('<h1 style="color: blue">CRIANDO UM SERVIDOR COM EXPRESS.JS</h1> inpu')
);*/

app.use('/notifica',notificaRouters)

app.listen(process.env.PORT,aviso)




