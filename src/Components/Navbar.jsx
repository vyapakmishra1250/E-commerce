import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';

const Navbar = () => {
    return(<>
 <ReactBootStrap.Navbar bg="light" expand="sm">
  <ReactBootStrap.Navbar.Brand href="/">E-Kart</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
  <ReactBootStrap.Navbar.Collapse id="navbarScroll">
    <ReactBootStrap.Nav
      className="my-2 my-lg-0"
      style={{ maxHeight: '100px'}}
      navbarScroll
    >
      <ReactBootStrap.Nav.Link href="/"><HomeIcon/>Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/cart"><ShoppingCartIcon/>Cart</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav
      className="ml-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <ReactBootStrap.NavDropdown  title="Products" id="navbarScrollingDropdown">
        <ReactBootStrap.NavDropdown.Item href="/mobile">SmartPhones</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/lappy">Laptop</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/electro">Electronics</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown  title="Account" id="navbarScrollingDropdown">
        <ReactBootStrap.NavDropdown.Item href="/login">Login</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/signup">SignUp</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    </>);
};
export default Navbar;