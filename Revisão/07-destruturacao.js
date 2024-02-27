/*  Desestruturação é a operação pela qual é possível extrair
    valores de vetores e objetos, atribuindos à variáveis individuais */
// 1- Desestruração de Vetor
const frutas = ['laranja', 'banana', 'maçã']

// Desestruturação
let [fruta1, fruta2, fruta3 ] = frutas
console.log({fruta1, fruta2, fruta3})

// Desestruturação parcial: 1º e 2º valores
let [f1, f2] = frutas
console.log({f1, f2})

// Desestruturação parcial: 1º e 3º valores
let [g1, , g3] = frutas
console.log({g1, g3})

// Desestruturação parcial: 2º e 3º valores
let [, h2, h3] = frutas
console.log({h2, h3})

/*************************************************/
console.log('\n--------------------------' + '\n')

// Problema: troca de valores entre variáveis (swap)
let x = 5, y = 10
console.log('Antes do Swap: ', {x,y})

// Swap feito de forma "Tradicional"
let temp = x
x = y
y = temp

console.log('Depois do Swap: ', {x, y})

// Swap feito por meio de desestruturação
let a = 1, b = 2;
console.log('Antes da swap com desestruturação: ', {a, b});
[a, b] = [b, a];
console.log('Depois do Swap com desestruturação: ', {a, b});

/*************************************************/

// 2- Desestruturação de objetos
const pessoa = {
    nome: 'Orkut',
    sexo: 'M',
    dataNasc: '2004-01-24',
    email: 'orkut@orkut.com'
}
/*  Na desestruturação de objetos, as variáveis avulsas:
    1- Devem ter os MESMOS NOMES das propriedades do objeto
    2- Podem ser especificadas em qualquer ordem
    3- Pode ser feita a desestruturação parcial */

    let {sexo, nome, email} = pessoa
    console.log({nome, sexo, email})
