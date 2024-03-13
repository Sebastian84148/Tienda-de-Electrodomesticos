import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Tienda de Electrodomesticos</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Televisores</Nav.Link>
          <Nav.Link href="#features">Celulares</Nav.Link>
          <Nav.Link href="#pricing">Tablets</Nav.Link>
          <Nav.Link href="#home">Heladeras</Nav.Link>
          <Nav.Link href="#home">Lavarropas</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
