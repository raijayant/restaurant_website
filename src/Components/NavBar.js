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
            About Us
        </Link>
        <Link to="/menu" className="nav-link nav-item">
            Menu
        </Link>
        <Link to="/contact" className="nav-link ml-auto" >
        Contact
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
    background: var(--mainLight);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
    }
    .navbar-brand{
      height: 3rem;
    }
`

export default NavBar
