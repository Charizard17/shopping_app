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
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
}