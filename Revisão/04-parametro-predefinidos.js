/*  Função que calcula a área de uma figura geometrica plana
    Forma é um parâmetro predefinido  */
function calcArea(base, altura, forma = 'R'){
    switch(forma){
        case 'R': //Retângulo
            return base * altura
        case 'T': //Triângulo
            return base * altura * 2
        case 'E': //Elipse
            return (base / 2) * (altura / 2) * Math.PI
        default: //Forma inváida ou desconhecida
            return null
    }
}
console.log('Triangulo 10x30: ', calcArea(10, 30 , 'T'))
console.log('Elipse(Círculo) 7,5x7,5: ', calcArea(7.5, 7.5, 'E'))
console.log('Retângulo 12x18: ', calcArea(12, 18, 'R'))
console.log('Forma invalida 12x18: ', calcArea(12, 18, 'X'))

//Cálculo da área de uma forma passando apenas fois parâmetros
//A função ira entender que é para fazer o cálculo da área de um Retângulo
console.log('Rentângulo 7x16: ', calcArea(7, 16))

/* Regras para o uso da parâmetro pré-definidos em funções
    1- o parâmetro pré-definido deve vir sempre POR ÚLTIMO na lista de parâmetros
    2- Pode haver mais de um parâmetro pré-definido, mas eles devem ser sempre os últimos da lista 
    de parâmetros */