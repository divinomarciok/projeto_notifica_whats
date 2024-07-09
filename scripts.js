let diretorioArquivo;
let jsonRetorno;

async function enviarArquivo(){
try {
    const formdata = new FormData();

    formdata.append("file",file.files[0])

     const requestOptions ={
        method:"POST",
        body: formdata,
        redirect: "follow"
    };

   return fetch("http://localhost:4000/notifica/panfleto", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return result;      
    })
    .catch((error) => console.error(error));
   
} catch (error) {
    console.log(error)
 }

}

function enviarJson(){

const myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "nome": nome.value,
  "preco": data.value,
  "descricao": "diretorio arquivo"});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:4000/notifica", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}

async function geraJsonPanfleto (){ 

  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");

  diretorio = await enviarArquivo()

  const raw = JSON.stringify({
    "diretorio": diretorio
  });

    const requestOptions = {
      method: "POST",  
      headers: myHeaders, 
      body: raw,
      redirect: "follow"
    };

   return fetch('http://localhost:4000/notifica/criaJson', requestOptions)
   .then(response => response.json())
   .then(data => {
    return data;  
    //console.log(data); 
  })
  .catch(error => {
    console.error('Erro ao buscar dados:', error);
  });


}
 async function GeraEnviaJson(){

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw  = JSON.stringify (await geraJsonPanfleto())
 
  console.log(raw)
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch("http://localhost:4000/notifica", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  }

/*function enviarJsoncomDir(){

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "diretorio": file.path
  })

  const requestOptions ={
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  }

  fetch("http://localhost:4000/notifica/panfleto",requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

}*/

/*function geraJson(){
  try {

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    
  
    const requestOptions ={
      method:"POST",
      headers: myHeaders,
      body:"",
      redirect: "follow"  
    }
  
    fetch("http://localhost:4000/notifica/criaJson", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      jsonRetorno = result;
      console.log(result)
    })
    .catch((error => console.error(error)))
    
    return jsonRetorno;
    
  } catch (error) {
    console.log(error)
  }

}*/