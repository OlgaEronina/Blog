import React, { PureComponent } from 'react'
import './Article.scss'

export default class Article extends PureComponent {

  render () {
    return (
      <div className="articleContainer">
        <div className="article">
          <h2 className="articleHeading">Some heading #1</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, amet, aspernatur
          corporis culpa doloremque dolorum et eum id laborum maxime molestias neque officiis optio
          perspiciatis praesentium quia ratione sit tempora tempore ullam velit voluptates? Architecto autem
          deleniti dolor, dolores doloribus eos error, ipsum nisi nostrum, quibusdam quisquam quos. <br/>
          <span className="unfold">Read more</span>
        </div>
        <div className="article">
          <h2 className="articleHeading">Some heading #2</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, amet, aspernatur
          corporis culpa doloremque dolorum et eum id laborum maxime molestias neque officiis optio
          perspiciatis praesentium quia ratione sit tempora tempore ullam velit voluptates? Architecto autem
          deleniti dolor, dolores doloribus eos error, ipsum nisi nostrum, quibusdam quisquam quos. <br/>
          <span className="unfold">Read more</span>
        </div>
        <div className="article">
          <h2 className="articleHeading">Some heading #3</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, amet, aspernatur
          corporis culpa doloremque dolorum et eum id laborum maxime molestias neque officiis optio
          perspiciatis praesentium quia ratione sit tempora tempore ullam velit voluptates? Architecto autem
          deleniti dolor, dolores doloribus eos error, ipsum nisi nostrum, quibusdam quisquam quos. <br/>
          <span className="unfold">Read more</span>
        </div>
      </div>
    )
  }
}