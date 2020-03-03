import * as React from "react";

import { Nav, Navbar } from "react-bootstrap";

export default class NavHeader extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">PokeApi</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/all">All</Nav.Link>
          <Nav.Link href="/detail">Detail</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
