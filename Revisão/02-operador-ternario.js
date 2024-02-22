let media = 8.3, resultado

if(media >= 6){
    resultado = 'Aprovado'
} 
else{
    resultado = 'Reprovado'
}
console.log({media, resultado})

// Usando o operador ternário
resultado = media >= 6 ? 'Aprovado' : 'Reprovado'
console.log({media, resultado})

/* Quando há apenas uma linha de if, um else, um while, etc... podemos omitir as chaves
 */
let user = 'guest', msg
if(user === 'admin') msg = 'Seja bem-vindo(a)!'
else msg = 'Acesso negado!'
console.log({user, msg})

// Equivalente usando operador ternário
msg = user === 'admin' ? 'Seja bem-vindo(a)' : 'Acesso negado'
console.log({user, msg})

