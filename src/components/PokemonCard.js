import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    toggle: true
  }

  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  toggleImage = () => {
    return this.state.toggle ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back
  }

  render() {
    // console.log(this.state.toggle)
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            {/* {this.state.toggle ? <img alt="oh no!" src={this.props.pokemon.sprites.front}/> : <img alt="oh no!" src={this.props.pokemon.sprites.back}/>} */}
            <img alt="oh no!" src={this.toggleImage()} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
