import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  // takes an array of pokemons and renders 
  renderAllPokemon = () => {
    return this.filteredPokemons().map(pokemon => {
      return <PokemonCard pokemon={pokemon}/>
    })
  }

  // an array of pokemons that match our input 

  filteredPokemons = () => {
    return this.props.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.props.input.toLowerCase())
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.renderAllPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
