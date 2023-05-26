import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BiHeart, BiCart } from 'react-icons/bi';

const Header = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">
				<img src='/img/header/icon.png' width={27} />
				<span className="fw-bold px-3">EQUIP</span>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbar-nav" />
			<Navbar.Collapse id="navbar-nav">
				<Nav className="me-auto mx-5">
					<NavDropdown title="Выбрать модель телефона" id="dropdown-menu">
						<NavDropdown.Item href="#">Модель 1</NavDropdown.Item>
						<NavDropdown.Item href="#">Модель 2</NavDropdown.Item>
						<NavDropdown.Item href="#">Модель 3</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href="/favorites">
						<BiHeart />
					</Nav.Link>
					<Nav.Link href="/cart">
						<BiCart />
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;