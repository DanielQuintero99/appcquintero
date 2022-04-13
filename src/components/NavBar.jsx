import React from "react"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropDown";
import Logo from '../../src/logos/GameShopOwl.png';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to={"./"} > <img width="70px" height="auto" className="img-responsive" src={Logo} alt="logo" /> </Link>
          <Navbar.Brand as ={Link} to="./">Tk-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as ={Link} to="./" >Home</Nav.Link>
              <Nav.Link as ={Link} to="./about-us">About Us</Nav.Link>
              <Nav.Link as ={Link} to="./contact">Contact Us</Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item as ={Link} to="./category/shirt">Shirt</NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="./category/hat">Hat</NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="./category/hoddie">Hoddie</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <CartWidget cant={0} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}