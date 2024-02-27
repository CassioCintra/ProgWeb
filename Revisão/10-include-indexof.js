const carros = ['Chevette', 'Fusca', 'Opala', 'Maverick', 'Belina', 'Del Rey']

/*  O método includes() testa se um dado elemento existe em um vetor.
    Retorna true se existir ou false caso contrário */

console.log('Tem Maverick? ', carros.includes('Maverick'))
console.log('Tem Corcel? ', carros.includes('Corcel'))
console.log('Tem Chevette? ', carros.includes('Chevette'))

/*  O metodo indexof() retorna o índice (posição) de um elemento no vetor.
    Caso o elemento não exista, retorna -1 */

console.log('\nTem Maverick? ', carros.indexOf('Maverick'))
console.log('Tem Corcel? ', carros.indexOf('Corcel'))
console.log('Tem Chevette? ', carros.indexOf('Chevette'))