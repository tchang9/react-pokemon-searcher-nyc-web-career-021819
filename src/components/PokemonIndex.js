import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    input: ''
  }

  getAllPokemon = () => {
    fetch(`http://localhost:3000/pokemon`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons: data
      })
    })
  }

  handleSearch = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  addPokemon = (pokemon) => {
    fetch(`http://localhost:3000/pokemon`, {
      method: 'POST', 
      body: JSON.stringify(pokemon),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res=>res.json())
    .then(pokemon => {
      this.setState({
        pokemons: [...this.state.pokemons, pokemon]
      })
    })
  }


  sortName = () => {
    const sortedPokemons = this.state.pokemons.sort((pokemon1, pokemon2) => {
      return  pokemon1.name.localeCompare(pokemon2.name)
    })

    this.setState({
      pokemons: sortedPokemons
    })
  }

  // numArray.sort((a, b) => a - b)
  sortHp = () => {
    const sortByHp = this.state.pokemons.sort((pokemon1, pokemon2) => {
      return pokemon1.stats.find(stat => stat.name === 'hp').value - pokemon2.stats.find(stat => stat.name === 'hp').value
    })

    this.setState({
      pokemons: sortByHp
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <button onClick={this.sortName}>Sort By Name</button>
        <button onClick={this.sortHp}>Sort By HP</button>

        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} input={this.state.input}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }

  componentDidMount() {
    this.getAllPokemon()
  }

}

export default PokemonPage
