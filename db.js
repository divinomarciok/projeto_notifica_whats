const mongo = require ('mongodb')
require('dotenv').config()

const uri="mongodb+srv://"+process.env.DBUSER+":"+process.env.DBPASS+"@cluster0.pxkqlju.mongodb.net/"

const client = new mongo.MongoClient(uri)


    async function main() {

        await client.connect();
        console.log('Connected successfully to server'); 

        const db = client.db('notificaPromo');
        const collection = db.collection('dadosSupermecado');

       const doc = { nome: 'João', idade: 30, cidade: 'São Paulo' }; 

       const jsonData = {
        "supermercado": "Campeão Supermercados",
        "local": "Rio Verde",
        "data_validade": "29 e 30 de junho de 2024",
        "ofertas": [
          { "categoria": "Feijão", "produto": "Feijão carioca Dona Cota 1kg tipo 1", "preco": 7.49, "unidade": "kg" },
          { "categoria": "Arroz", "produto": "Arroz Nossa Casa 5kg tipo 1", "preco": 26.69, "unidade": "kg" },
          { "categoria": "Leite Condensado", "produto": "Leite condensado Italac 395g semidesnatado TP", "preco": 4.89, "unidade": "unidade" },
          { "categoria": "Tomate", "produto": "Tomate longa vida", "preco": 3.99, "unidade": "kg" },
          { "categoria": "Leite", "produto": "Leite Italac 1L (exceto zero lactose)", "preco": 4.49, "unidade": "unidade" },
          { "categoria": "Pudim", "produto": "Pudim Dona Cota 35g", "preco": 0.89, "unidade": "unidade" }
        ],
        "promocoes": [
          { "categoria": "Diversos", "produto": "Produtos selecionados", "desconto": "Até 50% off", "selo": "Fecha Mês Arrasta Sador" }
        ]
      };
      
      
        // Insere o documento na coleção
        const result = await collection.insertOne(jsonData);
        console.log(`Documento inserido com o _id: ${result.insertedId}`);

        
        return 'done.';
      }
      
      main()
        .then(console.log)
        .catch(console.error);
