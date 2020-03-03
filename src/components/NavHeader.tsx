import * as React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default class NavHeader extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">PokeApi</Navbar.Brand>
        <Nav className="mr-auto">

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/all">All</NavLink>
          <NavLink to="/detail">Detail</NavLink>
        </Nav>
      </Navbar>
    );
  }
}
