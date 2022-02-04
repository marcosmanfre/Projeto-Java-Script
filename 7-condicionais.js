console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);


const idadeComprador = 19;
const estaAcompanha = true;
const temPassagemComprada = true;


console.log("Destinos possíveis: ");
console.log(listaDeDestinos)


// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanha) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1);

// } else {

//     console.log("Não é maior de idade e não vender");
// }


if (
    
    idadeComprador >= 18 || estaAcompanha == true) {        
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);
} else {

    console.log("Não é maior de idade e não vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem");
}else{
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);
