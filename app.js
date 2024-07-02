const express = require('express')
const cors = require ('cors')
const app = express()


require('dotenv').config()
require('./db.js')
const port = process.env.PORT || 3000;

function aviso (){
    console.log("O servidor esta rodando na porta http://localhost:8080")
}
app.use('/notifica',(req, res) => 
    res.send('<h1 style="color: blue">CRIANDO UM SERVIDOR COM EXPRESS.JS</h1> inpu')
);
async function iniciaServidor(){
    app.listen(process.env.PORT,aviso)
}


