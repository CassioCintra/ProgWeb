//Alguns dados de um usuário
let fullName = 'Joniscleison Junqueiro Júnior'
let userName = 'Junin'
let group = 'Alunos'

/* Criando um projeto a partir das variáveis acima. Note que o nome das propriedades
(à esqueda) coincide com o nome das variáveis (à direita) */
let user = {
    fullName: fullName,
    userName: userName,
    group: group
}

/* Criando um objeto equivalente ao comentado acima, usando propriedades abreviadas. Não é 
necessário repetir o mesmo identificador antes e depois do símbolo: */
let user2={
    fullName,
    userName,
    group,
}

console.log(user)
console.log(user2)

/* Um objeto pode misturar propriedades abreviadas e não abreviadas */
let userInfo= {
    fullName,
    userName,
    password: '123456',
    group,
    lastLogin: '2024-02-22 10:14:37'
}
console.log(userInfo)

/*  DEPURAÇÃO USANDO VARIÁVEIS ABREVIADAS 
    Exibindo o valor de duas variáveis. Veja que os valores são exibidos, mas a saída não 
informa de quais variáveis provêm os valores */
let x = 10, y = 'batata'
console.log(x, y)

/* Saída melhorada: passando um objeto com propriedades abreviadas para o console.log()
como uma forma de sabermos quais variáveis provêm os valores */
console.log({x, y})