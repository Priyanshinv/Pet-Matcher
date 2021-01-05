import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.jpg';

class Menu extends Component {
  render() {
    return (
		<div>
			<Navbar>
			<img src={logo} className="App-logo" alt="logo" width="2%" height="2%"/>
			<Navbar.Brand href="/" style={{color:"#006400"}}>PetMatcher</Navbar.Brand>
				<Nav className="mr-auto">
				  <Nav.Link href="/" style={{color:"black"}}>Home</Nav.Link>
				  <Nav.Link href="/about" style={{color:"black"}}>How It Works</Nav.Link>
				  <Nav.Link href="/contact" style={{color:"black"}}>Contact Us</Nav.Link>
				</Nav>
			</Navbar>
		</div>
    );
  }
}

export default Menu;