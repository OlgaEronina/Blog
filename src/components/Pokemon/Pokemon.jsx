import React, { PureComponent } from 'react'
import './Pokemon.scss'

export default class Pokemon extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      results: []
    }
  }

  componentDidMount () {
    window.fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=40')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            results: result.results
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
    window.onscroll = function () {
      let d = document.documentElement
      let offset = d.scrollTop + window.innerHeight
      let height = d.offsetHeight

      console.log('offset = ' + offset)
      console.log('height = ' + height)

      if (offset === height) {
        console.log('At the bottom')
      }
    }
  }

  render () {
    const {error, isLoaded, results} = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <ol className="pokemonList">
          {results.map(pokemon => (
            <li key={pokemon.name}>
              {pokemon.name}
            </li>
          ))}
        </ol>
      )
    }
  }
}