const express = require ('express')
const router = express.Router()

const notificaControl = require ('../controllers/notificaControllers')
require('../db.js')
const upload = require ('../config/multer.js')


router.post('/',notificaControl.adiciona);

router.post('/panfleto',upload.single('file'),notificaControl.uploadImg)

router.post('/criaJson',notificaControl.cria)



module.exports=router;  