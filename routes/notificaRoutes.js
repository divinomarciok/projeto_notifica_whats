const express = require ('express')
const router = express.Router()

const notificaControl = require ('../controllers/notificaControllers')
require('../db.js')

router.post('/',notificaControl.adiciona);

router.post('/panfleto',() =>{
    console.log('chama')
})
/*router.get('/form',(req, res)=>{
    res.sendFile("D:\\Divino\\JS\\projeto_notifica_whats\\index.html")
})*/



module.exports=router;