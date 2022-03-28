import React from "react"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropDown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Logo from '../../src/logos/GameShopOwl.png';  
import CartWidgetContainer from "./CartWidgetContainer";



export default function NavBar() {

  return (

    <>
      <header>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <img width="70px" height="auto" className="img-responsive" src={Logo}  alt="logo" />
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
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <CartWidgetContainer/>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </header>

    </>
  );
}