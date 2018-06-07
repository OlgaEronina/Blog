import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'
import './User.scss'

export default class User extends PureComponent {
  static propTypes = {
    user: PropTypes.arrayOf(
      PropTypes.shape({
          name: PropTypes.string,
          phone: PropTypes.string
        })
    ).isRequired
  };


  render () {
    const {user} = this.props;
    return (
      <div className="userList">
        {user.name} ({user.phone})
      </div>
    )
  }
}