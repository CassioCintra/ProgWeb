import React from 'react'

export default function Exercicio04a(){
    const [a, setA] = React.useState(0)
    const [b, setB] = React.useState(0)
    const [c, setC] = React.useState(0)

    function handleChange(e){
        switch(e.target.id){
            case 'a':
                setA(Number(e.target.value))
                break
            case 'b':
                setB(Number(e.target.value))
                break
            default:
                setC(Number(e.target.value))
        }        
    }
    function calcRaiz(){
        let result = null
        const delta = (b ** 2) - (4 * a * c)

        if(delta < 0){
            result = (null) //Não há soluções possíveis
        }
        else if(delta === 0){
            result = -b / 2 * a //Só tem uma solução
        }
        else{
            result = [] //2 Raízes
            result.push((-b + Math.sqrt(delta)) / (2 * a))
            result.push((-b - Math.sqrt(delta)) / (2 * a))
        }

        return result
    }
    //Estado calculado
    //  Um estado calculado é uma VARIÁVEL COMUM que recebe o resultado
    //  de um cáculo feito com variáveis de estado
    const raiz = calcRaiz() 
 
    return(
        <>
            <h1>Resolução da equação de 2º Grau</h1>
            <p>
                <input id='a' type='number' value={a} onChange={handleChange}/>
                 x² +
                <input id= 'b' type='number' value={b} onChange={handleChange}/>
                 x +
                <input id= 'c' type='number' value={c} onChange={handleChange}/>
                 = 0
            </p>
            <p>Solução: {JSON.stringify(raiz)}</p>
        </>
    )
}