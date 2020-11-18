//@ts-check
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";

// Note to self: Components can take in props.

// I used destructering to call in product props.
// Another alternative would be to call in (props) and then identify the props as ''${props.product._id}'' etc.
// Templete literals are being using throughout the page.
const Product = ({ product }) => {
	return (
		<Card className='my-1 p-1 rounded'>
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} variant='top' />
			</Link>

			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as='div'>
					<Rating
						value={product.rating}
						text={` ${product.numReviews} reviews`}
						// color='gold'
					/>
				</Card.Text>

				<Card.Text as='h3'>${product.price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
