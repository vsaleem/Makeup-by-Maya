import Jumbotron from "react-bootstrap/Jumbotron";
import React from "react";
import { Container, Button } from "react-bootstrap";
import "../Jumbotron/style.css";

const Splash = () => {
	return (
		<Jumbotron fluid>
			<Container>
				<h1>Simply the Best in Natural Beauty and Skincare</h1>
				<p>
					<Button variant='light'>Shop Now</Button>
				</p>
			</Container>
		</Jumbotron>
	);
};

export default Splash;
