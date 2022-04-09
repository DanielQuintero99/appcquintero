import React from "react"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropDown";
import Logo from '../../src/logos/GameShopOwl.png';
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <img width="70px" height="auto" className="img-responsive" src={Logo} alt="logo" />
          <Navbar.Brand href="#home">GameShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pc</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Ps4</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Xbox</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Wii</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Nintendo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Accessories</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <CartWidget cant={0} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}