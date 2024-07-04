const express = require ('express')
const router = express.Router()

const notificaControl = require ('../controllers/notificaControllers')
require('../db.js')
const upload = require ('../config/multer.js')

router.post('/',notificaControl.adiciona);

/*router.post('/panfleto',(req, res)=>{
    res.send("Deu certo");
})*/

router.post('/panfleto',upload.single('file'),(req, res)=>{
    if(req.file){
        res.send("Deu certo");
    }
   
})
    
    /*,upload.single('fileInput'),(req,res) =>{
    if(!req.file){
        return res.status(400).send('Nenhum arquivo Enviado')
    }
})*/



module.exports=router;