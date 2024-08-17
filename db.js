import mongo from 'mongodb';
import dotenv from 'dotenv';

dotenv.config()


const uri="mongodb+srv://"+process.env.DBUSER+":"+process.env.DBPASS+"@cluster0.pxkqlju.mongodb.net/"

//const uri= "mongodb+srv://divinomarciowts:<password>@cluster0.pxkqlju.mongodb.net/"

export const client = new mongo.MongoClient(uri)

 async function main() {

    await client.connect();
    console.log('Connected successfully to server'); 

   
    return 'done.';
}  
  main()
    .then(console.log)
    .catch(console.error);


export default {client,main};
   