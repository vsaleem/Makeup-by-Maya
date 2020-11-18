//@ts-check
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { Row, Col } from "react-bootstrap";
import SimpleSlider from "../components/Slider";
import Product from "../components/Product";
import { listProducts } from "../Actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Splash from "../components/Jumbotron/Jumbotron";
import { Button, Image } from "react-bootstrap";
// import Questions from "../components/Slider/questions";
// import { UserForm } from './components/Form/UserForm'
// import Question from "../components/Form/Question";
//import products onto page to test frontend. Then, remove it when you add your backend.
// import products from "../products";
// import axios from "axios";

// Functional-based component style
const Serums = () => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	useEffect(
		() => {
			dispatch(listProducts());
		},
		// Pass in an array of dependencies to useEffect.
		// Whenever the value inside the []s changes,
		// useEffect will take affect.
		[dispatch]
	);

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
			<Splash />
			<section className='view-container'>
				{/* Serums Informational Div */}
				<div className='serumsInfo'>
					<h3>Serums</h3>
					<>
						<p>
							Your skin and hair serums are prepared using only natural
							substances like vitamins, fruit extracts and essential oils —
							components that fight visible signs of aging, contribute to even
							tone, and give your skin a youthful glow.
						</p>
						<p>
							My natural serums deliver POWERFUL ingredients directly to your
							skin’s cells in highly concentrated formulas, so you’ll find them
							extremely fast-acting and effective.
						</p>
						<p>
							These innovations in cosmetic skincare contain more active
							compounds to nourish and replenish your skin. Exceptional results
							are achieved without additives, thickening agents, artificial
							fragrances or harmful dyes. You won’t find any chemicals in my
							formulas, including:
						</p>
						<p id='list-chemicals'>
							<ul>
								<li>Sulfates</li>
								<li>Formaldehyde</li>
								<li>Parabens</li>
							</ul>
						</p>
						<p>
							95% products I make are created with 100% vegan ingredients and
							none are ever tested on animals.
						</p>
						<Button variant='light'>View All Products</Button>
					</>
				</div>

				<div className='howToOrder'>
					<h4>Get Your Own Special Custom Serum</h4>
					<p>
						I’ll focus on your needs to create an individual solution and help
						you achieve your skincare goals. If you need a special formulation
						or have very special skin, then I can still help you.
						<br />
						<br />
						But I would need some information about you, so simply fill out
						questionnaire towards end of page. And then pay for it by selecting
						‘custom serum’ in the cart.
					</p>
					<Image src='Logo.jpg' rounded />
				</div>

				<div>
					{/* FYI:  Whenever you map through something, and/or create a list,
					you have to create a unique key.  
					Such as, key={product._id} within the Col. */}

					<h3>Latest Products</h3>
					{loading ? (
						<Loader />
					) : error ? (
						<Message variant='danger'>{error}</Message>
					) : (
						<Row>
							{products.map((product) => (
								<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
									<h4>{product.name}</h4>
									<Product product={product} />
								</Col>
							))}
						</Row>
					)}
				</div>

				{/* this is where the paypal cart needs to go  */}

				<div className='questionnaireDiv'>
					<h1 style={{ textAlign: "center" }}>
						Skincare Evaluation Questionnaire
					</h1>
					<SimpleSlider />
				</div>
				<hr />
				<div className='guaranteeDiv'>
					<h4>My Guarantee</h4>
					<p>
						I want you to be absolutely thrilled with your success and feel
						beautiful. If you're not completely satistfied after six weeks of
						use, as directed, contact me for a completely new formulation at no
						charge. Your specific preparation details will be referenced to
						create a nore potent formulation. My goal is to get you results!
					</p>
				</div>
				<div className='deliveryDiv'>
					<h4>Delivery Times and Confirmation</h4>
					<p>
						Items are only shipped 2 times a week (Tuesday and Friday) via USPS
						First Class Mail. Tracking confirmation will be sent upon shipment.
					</p>
				</div>
				<div className='commentsDiv'>
					<h4>Questions or Comments?</h4>
					<p>
						I would absolutely love to hear from you! Feel free to take ‘before’
						pictures and chart your progress weekly or biweekly. Keep me posted.
						<br />
						<br />
						Email: Maya@permanentmakeupbymaya.com
						<br />
						<br />
						Call/Text: 760.459.4434
						<br />
						<br />
						Instagram Direct Message: (Feel free to follow me!)
						<br /> Instagram (Direct Message)
					</p>
				</div>
			</section>
		</>
	);
};

export default Serums;
