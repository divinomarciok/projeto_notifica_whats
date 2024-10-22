function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getRandomFloat(min, max) {

    let randomfloat = Math.random() * (max - min) + min;
    return randomfloat.toFixed(2);

}

/*
//Categoria//
0-Sedas
1-Piteiras
2-Isqueiros
3-Dichavadores
4-Vaporizadores
5-Bongs
6-Pipes
7-Acessórios
*/
const categoria = [1, 2, 3, 4, 5, 6, 7, 8];

const produtos = [
    'Seda Raw Brownie',
    'Seda Raw White',
    'Seda Raw Brownie P',
    'Seda Raw White P',
    'Seda Smoking Large Green',
    'Seda Smoking Prata Slim',
    'Seda Smoking Black Basic',
    'Seda Smoking Brownie Basic',
    'Seda BemBolado Brownie Slim',
    'Seda BemBolado White Slim',
    'Seda BemBolado Brownie',
    'Seda BemBolado White',
    'Seda Lion Sabor Uva',
    'Seda Lion Sabor Maçã Verde ',
    'Seda Aledinha Large Green',
    'Seda Aledinha Large Brownie',
    'Piteira CulturaDab 12cm',
    'Piteira CulturaDab 3cm',
    'Piteira CulturaDab Transpiral',
    'Piteira CulturaDab Normal',
    'Piteira Zig-Zag M',
    'Piteira Zig-Zag G',
    'Piteira BemBolado 5cm',
    'Piteira BemBolado 10cm',
    'Piteira BemBolado Transpiral',
    "Isqueiro BIC Verde P",
    "Isqueiro BIC Azul P",
    "Isqueiro BIC Amarelo M",
    "Isqueiro BIC Vermelho G",
    "Isqueiro BIC Rosa G",
    'Isqueiro Clipper Basic Preto',
    "Isqueiro Clipper Dragon-Ball",
    "Isqueiro Clipper Super Poderosas",
    "Isqueiro Clipper Naruto",
    "Isqueiro Clipper Anime",
    "Dichavador Santa Cruz",
    "Seda Elements",
    "Vaporizador Elements de vidro",
    "Vaporizador NatuPlant de vidro",
    "Vaporizador Serge de vidro",
    "Bong CulturaDa Vidro",
    "Pipe Elements", "Moco Coca-Cola (esconderijo)",
    "Piteira Marley Escupida",
    "Dichavador Bomb Modelo X",
    "Incenso Indian Uva",
    "Incenso Indian Camomila",
    "Incenso Indian Frecor",
    "Incenso Indian Vibrations",
    "Incenso Mandalah Premium Elevate",
    "Incenso Mandalah Premium Singule",
    "Incenso Mandalah Premium Magical",
    "Incenso Mandalah Premium Soul",
    "Bong de Plastico",
    "Bong Raw Vidro 40cm",
    "Bong CulturaDab Plastico",
    "Bong CulturaDab Vidro 50cm",
    "Bag Raw Basic Azul",
    "Bag Raw Basic Verde",
    "Bag Raw Basic Marrom",
    "Bandeja Raw 15cm",
    "Bandeja Raw 30cm",
    "Bandeja Raw Estampa Floresta 15cm",
    "Bandeja BemBolado Basic 15cm",
    "Bandeja BemBolado Estampa Canada 30cm",
    "Tesoura Aluminiun P",
    "Tesoura Aluminiumn G",
    "Tesoura Farmacia P",
    "Tesoura Farmacia G",
    "Tesoura CulturaDab P",
    "Tesoura CulturaDab G",
    "Bag Raw Preta com corda",
    "Bag Leon Verde com corda",
    "Bag Leon Azul  com corda",
    "Bag CulturaDab",
    "Clear ClearDog solução de limpeza  50ml",
    "Clear ClearDog solução de limpeza  110ml",
    "Clear ClearDog solução de limpeza  250ml",
    "KitLimpeza Basic 5pipes",
    "KitLimpeza CulturaDab 3pipes",
    "KitLimpeza BemBolado 5pipes",
];



export function selecionaProdutos(quantidade) {

    //let contador = 0 ;
    let arrayProdutos = [];

    for (let i = 0; i < quantidade; i++) {

        let nomeCompleto = produtos[getRandomInt(produtos.length)];

        const produtosTabacaria = {

            Nome: nomeCompleto,
            Valor: getRandomFloat(5, 20),
            Marca: nomeCompleto.split(' ')[1],
            Categoria: selecionaCategoria(nomeCompleto.split(' ')[0]),
                       
        }

        arrayProdutos.push(produtosTabacaria);

    }

    return(arrayProdutos);
}

function criaJsonT() {

    const produtosTabacaria = {
        Nome: nome.value,
        Valor: valor.value,
        Marca: marca.value,
        Categoria: categoria.value,
        Tamanho: tamanho.value
        //Data: data.value
    }

    json_produtos.push(produtosTabacaria);

    limpaCampos()
}

function testando(tamanho) {

    for (let i = 0; i < tamanho; i++) {

        let nomeCompleto = produtos[getRandomInt(produtos.length)];
        console.log("\nNome Completo : ", nomeCompleto);
        let primeiroNome = nomeCompleto.split(' ')[0];
        console.log("Primeiro nome : ", primeiroNome);
        let segundoNome = nomeCompleto.split(' ')[1];
        console.log("Segundo nome : ", segundoNome);
        console.log(selecionaCategoria(primeiroNome));
    }
}

export function selecionaCategoria(palavra) {

    if (palavra == 'Seda') {
        return 0;
    }

    if (palavra == 'Piteira') {
        return 1;
    }

    if (palavra == 'Isqueiro') {
        return 2;
    }

    if (palavra == 'Dichavador') {
        return 3;
    }

    if (palavra == 'Vaporizador') {
        return 4;
    }

    if (palavra == 'Bong') {
        return 5;
    }

    if (palavra == 'Pipe') {
        return 6;
    } else {
        return 7
    }
}

export default selecionaProdutos;
//testando(40);

//getRandomFloat(50,100);