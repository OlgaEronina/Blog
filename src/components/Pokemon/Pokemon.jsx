import React, { PureComponent } from 'react'
import './Pokemon.scss'
import PropTypes from "prop-types";

export default class Pokemon extends PureComponent {
  static propTypes = {
   results: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ).isRequired
  };
  render () {
    const {result} = this.props;
    return (
      <div className="pokemonList">
        {result.name}
      </div>
    )
  }
}