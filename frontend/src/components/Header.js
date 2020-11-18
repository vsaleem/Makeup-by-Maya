//@ts-check
import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand>
						<img
							alt='Maya`s logo.'
							src='/Logo.jpg'
							width='50'
							height='50'
							className='d-inline-block align-top'
						/>
					</Navbar.Brand>

					<LinkContainer to='/'>
						<Navbar.Brand>{"Permanent Makeup by Maya"}</Navbar.Brand>
					</LinkContainer>

					<NavbarToggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<LinkContainer to='/serums'>
								<Nav.Link>
									<i className='fas fa-tags'></i>
									{"  Serums"}
								</Nav.Link>
							</LinkContainer>

							<LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart'> </i>
									{"  Cart"}
								</Nav.Link>
							</LinkContainer>

							<LinkContainer to='/login'>
								<Nav.Link>
									<i className='fas fa-user'></i>
									{"  Log In"}
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
