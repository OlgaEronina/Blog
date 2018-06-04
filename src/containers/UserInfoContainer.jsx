import React, { PureComponent } from 'react'
import UserList from 'components/Users/UserList.jsx'

export default class UserInfoContainer extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => {
        this.setState({users})
      })
  }

  render () {
    const {users} = this.state
    return (
      <div>
        <UserList users={users} />
      </div>
    )
  }
}