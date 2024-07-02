const express = require ('express')

const router = express.Router()

const notificaControl = require ('../controllers/notificaControllers')
require('../db.js')
router.post('/',notificaControl.adiciona);


module.exports=router;