import React, { PureComponent } from 'react'
import './Comment.scss'

export default class Comment extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      text: '',
      date: new Date()
    }
  }

  render () {
    const {items} = this.props
    const {name,text,date} = this.state

    return (
      <div className="comments">
        {items.map((item) => <p className="com">{item.name}: {item.text} <br /> {items.date}</p>)}
      </div>
    )

  }
}