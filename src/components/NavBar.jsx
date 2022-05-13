import React from "react"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropDown";
import Logo from '../../src/logos/GameShopOwl.png';
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

export default function NavBar() {
    return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-4" fixed="top">
          <Container fluid>
            <Link to={"./"} > <img width="70px" height="auto" className="img-responsive" src={Logo} alt="logo" /> </Link>
            <Navbar.Brand as={Link} to="./">Shiro&Kuro</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Welcome to Shiro&Kuro!
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="./">Home</Nav.Link>
                  <Nav.Link as={Link} to="./about-us">About Us</Nav.Link>
                  <Nav.Link as={Link} to="./contact">Contact Us</Nav.Link>
                  <NavDropdown
                    title="Categories"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="./category/shirt">Shirt</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="./category/hat">Hat</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="./category/hoddie">Hoddie</NavDropdown.Item>
                  </NavDropdown>                
                </Nav>
                {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            <CartWidget/>
            <LogWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
}