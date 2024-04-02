import * as React from 'react'
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
  // 🐨 crie uma ref aqui usando React.useRef()
  const tiltRef = React.useRef()
  
  // 🐨 adicione uma função `React.useEffect` aqui e use VanillaTilt para
  // fazer sua div parecer fantástica.
    React.useEffect(() => {
      const tiltNode = tiltRef.current
      VanillaTilt.init(tiltNode, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5
      })
      //  A função retornada por este useEffect() será executada APENAS UMA VEZ,
      //na faze de MONTAGEM do componente
      return () => tiltNode.vanillaTilt.destroy()

    }, []) // ~> Vetor de dependências VAZIO será executado apenas uma vez
    // durante a faze de Montagem do componente
  
  // 💰 Não se esqueça de especificar seu vetor de dependências! No nosso
  // caso, samemos que o nodo do tilt nunca muda, então ajuste o vetor para `[]`.
  return (
    <div className="tilt-root" ref={tiltRef}>
      <div className="tilt-child" ref={children}></div>
    </div>
  )
}

function Exercicio05() {
  return (
    <>
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </>
  )
}

export default Exercicio05