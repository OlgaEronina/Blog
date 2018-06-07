import React, { Fragment, PureComponent } from "react";
import PokemonList from "components/Pokemon/PokemonList";

export default class PokemonListContainer extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      offset: 0,
      error: null,
      isLoaded: false,
      results: []
    };
  }

  loadList = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=60`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            results: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };
  handleScroll = () => {
      const d = document.documentElement;
      const offset = d.scrollTop + window.innerHeight;
      const height = d.offsetHeight;

      if (offset === height) {
        this.loadList();
      }
  };

  componentDidMount () {
    this.loadList();
    window.addEventListener('scroll', this.handleScroll);
  }

  render () {
    const {results} = this.state;
    return (
      <div>
        <PokemonList results={results}/>
      </div>
    );
  }
}