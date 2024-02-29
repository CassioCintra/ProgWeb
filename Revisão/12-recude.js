// Vetores para teste
const numeros = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
const nomes = ['Aurival', 'Joender', 'Neurivânia', 'Terebintina', 'Leucimara']

/*  reduce() é um método que REDUZ um vetor a um ÚNICO valor. Para isso, aplica uma função
    a cada elemento do vetor, a qual efetua uma transformção e acumula o resultado a cada 
    passada */

// reduce() para somar todos os elementos do vetor de números
const soma = numeros.reduce((acumulador, elemento) => acumulador + elemento)
console.log('Soma dos númeors do vetor: ', soma)

/*  reduce() para colocar maiúsculas e concatenar com vírgulas intercaladas aos elementos
    do vetor nomes */
let resultado = nomes.reduce(
    (acumulador, elemento) => acumulador.toUpperCase() + ', ' + elemento.toUpperCase())

console.log('Lista de nomes separados por vígula: ', resultado)
