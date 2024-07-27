const express = require ('express')
const router = express.Router()

const notificaControl = require ('../controllers/notificaControllers')
require('../db.js')
const upload = require ('../config/multer.js')


router.post('/',notificaControl.adiciona);

router.get('/consulta',notificaControl.consulta);

// rota post, recebe um atributo com nome 'file' pelo body, e posteriormente processa na função de callback
router.post('/panfleto',upload.single('file'),notificaControl.uploadImg)

router.post('/criaJson',notificaControl.cria)



module.exports=router;  