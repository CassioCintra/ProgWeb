let nome = 'Valcicleide'
let idade = 20
let cidade = 'Morro Alto de Cima/MG'
console.log('Meu nome é ' + nome + ' tenho ' + idade + ' anos e moro em ' + cidade + '.')

// Usando template string
console.log(`Meu nome é ${nome} tenho ${idade} anos e moro em ${cidade}.`)

// Dentro de uma template string, não estamos limitados a usar apenas variáveis dentro do simbolo ${}
// Na verdade, qualquer código JS válido pode ser usado ali
console.log(`Daqui há cinco anos, ${nome.toLocaleUpperCase()} terá ${idade + 5} anos`)