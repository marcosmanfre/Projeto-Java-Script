console.log(`Trabalhando com Listas`);

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

listaDeDestinos.push('Curitiba')

console.log("Destinos possíveis: ");

console.log(listaDeDestinos)

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos[1]);

