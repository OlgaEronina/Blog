import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import User from './User.jsx'

export default class UserList extends PureComponent {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape(
        {
          name: PropTypes.string,
          phone: PropTypes.string.isRequired
        }
      )
    )
  };
  static defaultProps = {
    users: []
  };

  render () {
    const {users} = this.props;
    return (
      <div>
        {users.map((user,idx) => <User key={idx} user = {user} />)}
      </div>
    )
  }
}