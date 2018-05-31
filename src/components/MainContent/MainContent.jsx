import React, { Component } from 'react'
import './MainContent.scss'
import SideMenu from '../SideMenu'
import { sideMenuItems } from '../SideMenu/SideMenuItems'


export default class MainPage extends Component {
  render () {
    return (
      <div className="mainContent">
        <div className="mainContentText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa cum dolor earum est, et explicabo harum
          ipsum iste perspiciatis quos, rem voluptas? Aut earum fugiat harum maxime officia possimus, reprehenderit
          totam vitae voluptatibus. Adipisci aut cum doloribus exercitationem facere impedit itaque, laborum modi, nam
          natus nisi non odit, officiis quos reiciendis similique totam. Culpa impedit nihil officiis, porro sint totam.
          Asperiores esse ipsum iste libero? Atque cumque, ducimus, earum hic iste quasi quisquam quos reiciendis
          repellat sequi sunt voluptatem. Est facere magnam molestiae, pariatur possimus tempora voluptatem. Ab dicta in
          iusto laborum libero natus optio perspiciatis quas, rem unde. <br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa cum dolor earum est, et explicabo harum
          ipsum iste perspiciatis quos, rem voluptas? Aut earum fugiat harum maxime officia possimus, reprehenderit
          totam vitae voluptatibus. Adipisci aut cum doloribus exercitationem facere impedit itaque, laborum modi, nam
          natus nisi non odit, officiis quos reiciendis similique totam. Culpa impedit nihil officiis, porro sint totam.
          Asperiores esse ipsum iste libero? Atque cumque, ducimus, earum hic iste quasi quisquam quos reiciendis
          repellat sequi sunt voluptatem. Est facere magnam molestiae, pariatur possimus tempora voluptatem. Ab dicta in
          iusto laborum libero natus optio perspiciatis quas, rem unde.
        </div>
        <SideMenu items={sideMenuItems} />
      </div>
    )
  }
}