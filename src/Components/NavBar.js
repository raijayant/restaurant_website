import React, { Component } from 'react'
import Logo from '../logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand sm navbar-dark px-sm-5">
        <Link to="/">
            <img src={Logo} alt="logo" className="navbar-brand" style={{width: "5rem", height: "5rem"}} />
        </Link>
        <Link to="/aboutus" className="nav-link nav-item">
            About
        </Link>
        <Link to="/menu" className="nav-link nav-item">
            Menu
        </Link>
        <Link to="/contact" className="nav-link nav-item" >
        Contact
        </Link>
        <Link to="/cart" className="nav-link ml-auto" >
        Cart
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
    background: var(--mainLight);
    .nav-link {
        font-size: 1.3rem;
        color: black;
    }
    .navbar-brand{
      height: 2rem;
    }
`

export default NavBar
