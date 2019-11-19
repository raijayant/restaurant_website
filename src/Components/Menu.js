import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from './ContextApi'


class Menu extends Component {
  render() {
    const { id, title, img, price, inCart }  = this.props.menu
    return (
      <div>hello</div>
    )
  }
}

export default Menu
