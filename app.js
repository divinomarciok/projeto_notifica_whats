//configurações para obter o arquivo do diretorio

import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express'
const app = express()

import dotenv from 'dotenv';
dotenv.config()

import notificaRouters from "./routes/notificaRoutes.js";

import { env } from 'process';

//import process from 'dotenv';
//import upload from './config/multer.js'


const port = env.PORT || 3000;

app.use(express.json())

app.use(express.static(__dirname))

app.use('/notifica', notificaRouters)

app.listen(port, () => {
    console.log('O servidor esta rodando na URL http://localhost:' + port);
})






