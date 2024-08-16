async function selecionaCategoria(quantidade){

    try {

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

        let arrayProdutos = [];
    
        for (let i = 0; i < quantidade; i++) {
    
            let nomeCompleto = produtos[getRandomInt(produtos.length)];
    
            const produtosTabacaria = {
    
                Nome: nomeCompleto.split(' ')[0],
                Valor: getRandomFloat(5, 20),
                Marca: nomeCompleto.split(' ')[0],
                Categoria: selecionaCategoria(nomeCompleto.split(' ')[0]),
    
            }
    
            arrayProdutos.push(produtosTabacaria);
    
        }
    
        return (arrayProdutos);

}catch(error){
    console.log(error)
}

}

module.exports={
    selecionaCategoria
}