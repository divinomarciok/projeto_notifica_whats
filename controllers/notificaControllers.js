import { json } from 'express';
import {client} from '../db.js';
import {run}  from '../gemini/request.js';



async function adiciona(req,res){
    try {
    
        const db = client.db('notificaPromo');
        const collection = db.collection('dadosSupermecado');
        
       
        const result =  collection.insertOne(req.body);

        res.status(201).json({_id: (await result).insertedId});
                   
       } catch (error) {
           console.error('Erro ao inserir produto:'.error);
           console.log(error)
           res.status(500).json({error:"Erro interno do servidor"});
       }
}

async function consulta(req,res){
    try {
        const db = client.db('notificaPromo');
        const collection = db.collection('dadosSupermecado');

        const body = req.body;

        
        let produtoFiltrado = body.filtro;

        console.log(produtoFiltrado)

        const query = { produtos: { $elemMatch: { marca: produtoFiltrado } } };
        
        const result =  collection.find(query).toArray();
        
        for(let i=0; i< result.length;i++){

            const objeto = result[i]

            console.log(objeto._id)
        }
        console.log(result)
         res.status(200).json({json: await result}

         )
         //console.log("deu certo")
    
    } catch(error){
        res.status(500).json({error: " API deu ruim"})  
    }
}

async function uploadImg(req,res){
    try{  
        
        const file = req.file.path
      
        return res.send(file)
 
     } catch (error){
         console.log(error)
     }
}

async function cria(req,res){
    try{  
        
        let retorno = req.body;

        let diretorio = retorno.diretorio;
    
        console.log(diretorio);  
        
        let arquivo =  await run (diretorio)
        

        res.send(arquivo)
        //res.status("201").json({arquivo})
        //return arquivo;
     } catch (error){
         console.log(error)
     }
}

export default{
    cria,
    adiciona,
    consulta,
    uploadImg
}


/*exports.adiciona = async (req,res) =>{
                
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

exports.consulta = async(req,res) =>{  

    try {
        const db = client.db('notificaPromo');
        const collection = db.collection('dadosSupermecado');

        const body = req.body;

        
        let produtoFiltrado = body.filtro;

        console.log(produtoFiltrado)

        const query = { produtos: { $elemMatch: { marca: produtoFiltrado } } };
        const result = await collection.find(query).toArray();
        
        for(let i=0; i< result.length;i++){
            const objeto = result[i]

            console.log(objeto._id)
        }
        console.log(result)
         res.status(200).json({json:result})
         //console.log("deu certo")
    
    } catch(error){
        res.status(500).json({error: " API deu ruim"})  
    }
    
},

exports.uploadImg = async(req,res) =>{
    try{  
        
       const file = req.file.path
     
       return res.send(file)

    } catch (error){
        console.log(error)
    }
}

 exports.cria = async (req,res) =>{

    jsonRetorno =  req.body;

    diretorio = jsonRetorno.diretorio;

    console.log(diretorio)   
    
    let arquivo = await run(diretorio)

    res.send(arquivo)
    return arquivo;
 }*/

 //export default cria ;