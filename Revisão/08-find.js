/*  O método find() encontra, em um vetor, o PRIMEIRO ELEMENTO que
    corresponda ao retorno de uma função passada como parâmetro */

// Vetores para busca
const numeros = [12, 19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticada', 'maracujá']

// Encontrando o primeiro número negativo do vetor de números
console.log('\nPrimeiro número negativo: ', numeros.find( n => n <0))

// Encontrando o primeiro múltiplo de 5
console.log('Primeiro número múltiplo de 5: ', numeros.find(x => x % 5 === 0))

// Encontrando o primeiro número mais que 20
console.log('Primeiro númeor maior que 20: ', numeros.find(i => i > 20))

// Encontrando a primeira fruta que começa com a letra 'M'
console.log('Primeira fruta com a letra M: ', frutas.find(f => f.charAt(0) === 'm'))

// Encontrando a primeira fruta que termina com a letra 'R'
console.log('Primeira fruta que termina com R: ', frutas.find(f => f.slice(-1) === 'r'))