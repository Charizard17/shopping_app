import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

export default class Navi extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
}
  setIsOpen = (qwe)=>{
    this.setState({
      open:qwe
    })
  }
  isOpen = ()=>{
    return this.state.open;
  }

  toggle() {
    const isOpen = this.state.active;
    return this.isOpen({isOpen});
  };
  

  render() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Shopping Power</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink>
            <Link to="/">Home</Link>
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink>
            <Link to="/form1">Form Demo 1</Link>
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink>
            <Link to="/form2">Form Demo 2</Link>
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Charizard17">GitHub</NavLink>
            </NavItem>
            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
}