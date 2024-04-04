import * as React from 'react'

import { fetchPokemon, PokemonInfoFallback, PokemonDataView, PokemonForm} from '../pokemon'

function PokemonInfo({pokemonName}) {
  //const [pokemon, setPokemon] = React.useState(null)
  //const [error, setError] = React.useState(null)
  //const [status, setStatus] = React.useState('idle')
  
  const [state, setState] = React.useState({
    pokemon: null,
    error: null,
    status: 'idle'
  })
  const {pokemon, error, status} = state

  React.useEffect(() => {
    if(!pokemonName) return
    
    //setPokemon(null)
    //setError(null)
    //setStatus('pending')
    setState = ({
      pokemon:null,
      error:null,
      status:'pending'})

    fetchPokemon(pokemonName).then( //Sucesso
      pokemonData => {
        //setPokemon(pokemonData),
        //setStatus('resolved')
        setState({
          ...state,
          pokemon: pokemonData,
          status: 'resolved'
        })
      }
      )
    .catch( //Falha
      error => {
        //setError(error),
        //setStatus('rejected')
        setState({
          ...state,
          error,
          status: 'rejected'
        })
      }
    )
  }, [pokemonName])

  React.useEffect(() => {
    console.count('Componente atualizou.')
  })

//if(error) return (
//  <div role='alert'>
//    <pre stryle= {{whiteSpace:'normal'}}>{error.message}</pre>
//  </div>
//)
//if(! pokemonName) return 'Informe um Pokémon'
//if(pokemonName && !pokemon) return <PokemonInfoFallback name={pokemonName}/>
//if(pokemon) return <PokemonDataView pokemon={pokemon}/>

  switch(status){
    case 'idle':
      return 'Informe o Pokemon!'
    case 'pending':
      return <PokemonInfoFallback name={pokemonName} />
    case 'resolved':
      return <PokemonDataView pokemon={pokemon} />
    default: // rejected
      return(
        <div role= "alert">
          <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
        </div>
      )
  }
}

function Exercicio06() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}

export default Exercicio06