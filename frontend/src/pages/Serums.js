//@ts-check
import React, { useState, useEffect } from "react";
import "../App.css";
import Questions from "../components/Slider/questions";
// import { UserForm } from './components/Form/UserForm'
import { Row, Col } from "react-bootstrap";
import SimpleSlider from "../components/Slider";
import Question from "../components/Form/Question";
//import products onto page to test frontend. Then, remove it when you add your backend.
// import products from "../products";
import Product from "../components/Product";
import axios from "axios";

// Functional-based component style
const Serums = () => {
	// Defining State
	const [products, setProducts] = useState([]);
	// [what you are naming the state, what you are naming the function to change the state]
	// Whenever you want to pass in the state as a default, you would pass it in here--> useState([]).

	useEffect(() => {
		console.log("Making a request to backend server.");
		// Using Async Await syntax
		const fetchProducts = async () => {
			const { data } = await axios.get("/api/products");

			setProducts(data);
		};
		// Call function
		fetchProducts();
	}, 
	// Pass in an array of dependencies to useEffect.
	// Whenever the value inside the []s changes, 
	// useEffect will take affect.
	[]);

	// state = {
	// 	questions: "",
	// };

	// Add logic to operate components on page

	// Create function that loads Question
	// loadNextQuestion = () => {
	// 	Questions.questions.title
	// 		.then((res) =>
	// 			this.setState({
	// 				question: res.data.questions,
	// 			})
	// 		)
	// 		.catch((err) => console.log(err));
	// 	console.log("A question appeared!!");
	// };

	// Add render() to return tags, elements & components onto page
	return (
		<>
			<div className='view-container'>
				<div className='title-holder'>
					<h2 className='title-text'>
						Serums That Give You Glowing, Gorgeous Results
					</h2>
				</div>

				{/* Products Div */}
				{/* FYI:  Whenever you map through something, and/or create a list
					you have to create a unique key.  
					Such as, key={product._id} within the Col. */}
				<>
					<h1>Latest Products</h1>
					<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<h4>{product.name}</h4>
								<Product product={product} />
							</Col>
						))}
					</Row>
				</>
				{/* this is where the paypal cart needs to go  */}

				<h1 style={{ textAlign: "center" }}>
					Skincare Evaluation Questionnaire
				</h1>

				{/* <div id='user-form'>
                        <UserForm />
                    </div> */}

				<SimpleSlider />
			</div>
		</>
	);
};

export default Serums;
