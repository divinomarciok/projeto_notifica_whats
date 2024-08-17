import express from 'express';
const router = express.Router()

import notificaControl from '../controllers/notificaControllers.js';

//import client from '../db.js';
//require('../db.js')
//client.main()

import upload from '../config/multer.js';


router.post('/',notificaControl.adiciona);

router.post('/consulta',notificaControl.consulta);

// rota post, recebe um atributo com nome 'file' pelo body, e posteriormente processa na função de callback
router.post('/panfleto',upload.single('file'),notificaControl.uploadImg)

router.post('/criaJson',notificaControl.cria)



export default router;  