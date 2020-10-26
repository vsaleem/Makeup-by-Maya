//@ts-check
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "../App.css";
import Questions from "../components/Slider/questions";
// import { UserForm } from './components/Form/UserForm'
import { Row, Col } from "react-bootstrap";
import SimpleSlider from "../components/Slider";
import Question from "../components/Form/Question";
//import products onto page to test frontend. Then, remove it when you add your backend.
// import products from "../products";
import Product from "../components/Product";
// import axios from "axios";
import { listProducts } from '../Actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

// Functional-based component style
const Serums = () => {
	const dispatch = useDispatch()

	const productList = useSelector(state => state.productList)
	const { loading, error, products } = productList

	useEffect(() => {
		dispatch(listProducts())
	}, 
	// Pass in an array of dependencies to useEffect.
	// Whenever the value inside the []s changes, 
	// useEffect will take affect.
	[dispatch]);

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
					{loading ? <Loader />
					: error ? <Message variant='danger'>{error}</Message> 
					:<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<h4>{product.name}</h4>
								<Product product={product} />
							</Col>
						))}
					</Row>

					}
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
