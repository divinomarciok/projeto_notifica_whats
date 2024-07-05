const {client} = require('../db.js')
const {run} = require ('../gemini/request.js')

exports.adiciona = async (req,res) =>{
                
    try {
    
     const db = client.db('notificaPromo');
     const collection = db.collection('dadosSupermecado');
     
    
     const result = await collection.insertOne(req.body);
     res.status(201).json({_id: result.insertedId });
   
        
    } catch (error) {
        console.error('Erro ao inserir produto:'.error);
        console.log(error)
        res.status(500).json({error:"Erro interno do servidor"});
    }
 },


exports.adicionaDir = async(req,res) =>{
    try{
       const db = client.db('notificaPromo');
       const collection = db.collection('dadosSupermecado')

       const file = req.file.path

       const result = await collection.insertOne(req.body)


       return res.send(file)
    } catch (error){
        console.log(error)
    }
}

 exports.cria = async (req,res) =>{
    let arquivo = await run()
    res.send(arquivo)
 }
    