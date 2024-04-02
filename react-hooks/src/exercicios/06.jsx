import * as React from 'react'

import { fetchPokemon, PokemonInfoFallback, PokemonDataView, PokemonForm} from '../pokemon'

function PokemonInfo({pokemonName}) {
  const [pokemon, setPokemon] = React.useState(null)
  const [error, setError] = React.useState(null)
   
  React.useEffect(() => {
    if(!pokemonName) return
    
    setPokemon(null)
    setError(null)

    fetchPokemon(pokemonName).then( //Sucesso
      pokemonData => setPokemon(pokemonData))
    .catch( //Falha
      error => setError(error))
    
  }, [pokemonName])

  if(error) return (
    <div role='alert'>
      <pre stryle= {{whiteSpace:'normal'}}>{error.message}</pre>
    </div>
  )
  if(! pokemonName) return 'Informe um Pokémon'
  if(pokemonName && !pokemon) return <PokemonInfoFallback name={pokemonName}/>
  if(pokemon) return <PokemonDataView pokemon={pokemon}/>
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