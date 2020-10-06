//@ts-check
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>
						<img
							alt='Maya`s logo.'
							src='/Logo.jpg'
							width='30'
							height='30'
							className='d-inline-block align-top'
						/>
					</Navbar.Brand>
					<Navbar.Brand>{"Permanent Makeup by Maya"}</Navbar.Brand>
					<NavbarToggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link href='/cart'>
								<i className='fas fa-shopping-cart'> </i>
								{" Cart"}
							</Nav.Link>
							<Nav.Link href='/signin'>
								<i className='fas fa-user'></i>
								{" Log In"}
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
