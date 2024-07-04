let diretorioArquivo;

function enviarArquivo(){
try {
    const formdata = new FormData();

    formdata.append("file",file.files[0])

     const requestOptions ={
        method:"POST",
        body: formdata,
        redirect: "follow"
    };

   fetch("http://localhost:4000/notifica/panfleto", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      diretorioArquivo=result;
      console.log(result);
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
  "descricao": diretorioArquivo
});

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

function enviarJsoncomDir(){

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

}