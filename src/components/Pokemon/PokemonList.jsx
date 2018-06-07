import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Pokemon from './Pokemon.jsx'

export default class PokemonList extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      offset: 0,
      error: null,
      isLoaded: false,
      results: []
    };
  }
  static propTypes = {
    results: PropTypes.arrayOf(
      PropTypes.shape(
        {
          name: PropTypes.string.isRequired,
        }
      )
    )
  };
  static defaultProps = {
    results: []
  };

  render () {
    const {error, isLoaded, results} = this.props;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          {results.map((result,idx) => <Pokemon key={idx} result = {result} />)}
        </div>
      )
    }
  }
}