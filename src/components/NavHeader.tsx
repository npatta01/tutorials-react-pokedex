import * as React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavHeader extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">PokeApi</Navbar.Brand>
        <Nav className="mr-auto">

          <Nav.Link as={Link} to="/">All</Nav.Link>
          <Nav.Link as={Link} to="/detail/5">Detail</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
