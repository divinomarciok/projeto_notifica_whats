const json_produtos = [];


async function enviarArquivo(){
try {
    const formdata = new FormData();

    //atribui o valor do input file, ao atributo "file" do formdata

    formdata.append("file",file.files[0])

     const requestOptions ={
        method:"POST",
        body: formdata, // atributo file enviado para rota 
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

//função monta um JSON a partir dos dados fornecidos no formulario do HTML identifica pelo id.


function criaJsonT() {

      const produtosTabacaria ={
      Nome: nome.value,
      Valor: valor.value,
      Marca: marca.value,
      Tamanho: tamanho.value,
      Data: data.value
      }
     
      json_produtos.push(produtosTabacaria);

}

function mostraProdutos(){
  console.log(JSON.stringify(json_produtos));
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


// função assincrona que utiliza de outras duas funções 

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