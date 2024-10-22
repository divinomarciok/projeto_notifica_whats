import { json } from 'express';
import {client} from '../db.js';
import {run}  from '../gemini/request.js';
import {selecionaCategoria} from '../teste/scriptTest.js'



async function adiciona(req,res){
    try {
    
        const db = client.db('dadosTabacaria');
        const collection = db.collection('tabacaria01');
        
       
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
       const db = client.db('dadosTabacaria');
       const collection = db.collection('tabacaria01');

       const body = req.body;
        
       
      let tipoConsulta = body.tpConsulta;
      let produtoFiltrado = body.filtro;

      console.log(tipoConsulta)
      console.log(produtoFiltrado)
      
    //let queryMarca = { produtos: { $elemMatch: {Marca:produtoFiltrado} } };

     const query = selecionaQuery(tipoConsulta,produtoFiltrado)

     console.log(query);
        
     const result =  await collection.find(query).toArray();
        
        for(let i=0; i< result.length;i++){

            const objeto = result[i]

            console.log(objeto._id)
        }
        
         res.status(201).json({json : result})
        // res.status(201).json({json:produtoFiltrado, teste: tipoConsulta})
         
    } catch(error){
        res.status(500).json({error: " API de consulta ruim"})  
    }
}


function selecionaQuery (tipoconsulta,filtro){

    if(tipoconsulta == "Marca"){
        return  { produtos: { $elemMatch: {Marca:filtro} } };
    }
    if(tipoconsulta == "Categoria"){
        filtro = selecionaCategoria(filtro)
    return  {produtos:{$elemMatch:{Categoria:filtro}}};
    }else{
        return console.log(tipoconsulta," : Tipo de consulta nao e valido");
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
