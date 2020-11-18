//@ts-check
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						&copy; Copyright 2021 Permanent Makeup by Maya - All Rights Reserved
						<a
							href='https://mailchi.mp/853fccd99bde/insidersignup'
							target='_blank'>
							<span className='mbr-iconfont mbr-iconfont-social mbri-alert'></span>
						</a>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
