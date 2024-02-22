/* Encontrando o menor e o maior número em uma série */
let minimo = Math.min(2, -7, 8, 4, 0)
let maximo = Math.max(2, -7, 8, 4, 0)

console.log({minimo, maximo})

/* E se os números estiverem dentro de um vetor? */
let nums = [2, -7, 8, 4, 0]
minimo = Math.min(nums) //Não Funciona
maximo = Math.max(nums) //Não Funciona

console.log({maximo, minimo})

/* A sintaxe de espalhamento ou spreading (representada por ... antes do nome da variável)
é capaz de "desempacotar" um vetor em uma série de valores avulsos */
minimo = Math.min(...nums)
maximo = Math.max(...nums)

console.log({minimo, maximo})

/* ------------------------------------------------------------------------------------- */

let carro = {
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano:  1984,
    cor: 'bege'
}
// Copiando o carro 1 para o carro 2
let carro2 = carro // Não funciona

//Mudando o valor das propriedades do carro2
carro.modelo = 'Opala'
carro.marca = 'Chevrolet'
carro.ano = 1979
carro.cor = 'preto'

console.log({carro, carro2})

// Usando espalhamento para obter uma nova cópia real do objeto
let carro3 = {...carro}
carro3.ano = 1969
carro3.modelo = "Teste"
carro3.marca = "Teste"
carro3.cor = "Azul"

console.log({carro, carro3})

/* ------------------------------------------------------------------------------------- */

// PROBLEMA: juntar dois ou mais vetores em um novo vetor
let frutas = ['maçã', 'banana', 'laranja']
let verduras = ['alface', 'couve', 'rúcula']
// Usando JS "Clássico"
let hotifruti = frutas.concat(verduras)
// Usando Espalhamento
let hotifruti2 = [...frutas, ...verduras]

console.log({hotifruti, hotifruti2})

/* ------------------------------------------------------------------------------------- */

// PROBLEMA: Escrever uma função capaz de receber um número arbitrário de parâmetros
function soma(...nums){
    let resultado = 0
    for (let n of nums) resultado += n
    return resultado
}
console.log('Soma 7 números: ', soma(1, 2, 3, 4, 5, 6, 7))
console.log('Soma 12 números: ', soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12))