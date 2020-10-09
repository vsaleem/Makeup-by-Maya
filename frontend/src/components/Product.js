//@ts-check
import React from "react";
import { Card } from "react-bootstrap";

// Note to self: Components can take in props.

// I used destructering to call in product props.
// Another alternative would be to call in (props) and then identify the props as ''${props.product._id}'' etc.
// Templete literals are being using throughout the page.
const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<a href={`/product/${product._id}`}>
				<Card.Img src={product.image} variant='top' />
			</a>

			<Card.Body>
				<a href={`/product/${product._id}`}>
					<Card.Title as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</a>
				<Card.Text as='div'>
					<div className='my-3'>
						{product.rating} from {product.numReviews} reviews
					</div>
				</Card.Text>
				<Card.Text as='h3'>${product.price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
