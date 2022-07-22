import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/header.css";
import { CryptoState } from "../Cryptocontext";

function BasicExample() {
  function handleNavdropdown(data) {
    const txt = data.target.innerHTML;
    setCurrency(txt);
  }
  const { Currency, setCurrency } = CryptoState();
  return (
    <Navbar bg="dark" className="nav" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="nav-title">
          Crypto-Hunter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown title={Currency} id="basic-nav-dropdown" variant="dark">
            <NavDropdown.Item href="#action/3.1" onClick={handleNavdropdown}>
              USD
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" onClick={handleNavdropdown}>
              INR
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
