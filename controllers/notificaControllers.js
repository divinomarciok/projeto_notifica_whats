const {client} = require('../db.js')

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
 }
    