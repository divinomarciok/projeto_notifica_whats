const mongo = require ('mongodb')
require('dotenv').config()

const uri="mongodb+srv://"+process.env.DBUSER+":"+process.env.DBPASS+"@cluster0.pxkqlju.mongodb.net/"

//const uri= "mongodb+srv://divinomarciowts:<password>@cluster0.pxkqlju.mongodb.net/"

const client = new mongo.MongoClient(uri)

async function main() {

    await client.connect();
    console.log('Connected successfully to server'); 

   
    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error);


module.exports={
    client,
    main
}

   