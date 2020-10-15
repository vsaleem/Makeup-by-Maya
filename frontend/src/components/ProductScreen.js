import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from 'axios'

const ProductScreen = ({ match }) => {
	// Set up state
	const [product, setProduct] = useState({})

	// Set up useEffect
	useEffect(() => {
		// Using Async Await syntax
		const fetchProduct = async () => {
			// To GET single product by id by using the url;
			// Change the route GET request to backticks``,
			// Then add tenary operator variable ${match.params.id}
			const { data } = await axios.get(`/api/products/${match.params.id}`);

			setProduct(data);
		}
		// Call function
		fetchProduct();
	}, [])

	return (
		<>
			<Link className='btn btn-light my-3' to='/serums'>
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup.Item>
						<h4>{product.name}</h4>
					</ListGroup.Item>
					<ListGroup.Item>
						<Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
						/>
					</ListGroup.Item>
					<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
					<ListGroup.Item>{product.description}</ListGroup.Item>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup.Item>
							<Row>
								<Col>Price:</Col>
								<Col>
									<strong>${product.price}</strong>
								</Col>
							</Row>
						</ListGroup.Item>

						<ListGroup.Item>
							<Row>
								<Col>Status:</Col>
								<Col>
									{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Button
								className='btn-block'
								type='button'
								disabled={product.countInStock === 0}>
								Add to Cart
							</Button>
						</ListGroup.Item>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductScreen;
