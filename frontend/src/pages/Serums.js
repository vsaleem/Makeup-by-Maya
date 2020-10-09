//@ts-check

import React from "react";
import "../App.css";
import Questions from "../components/Slider/questions";
// import { UserForm } from './components/Form/UserForm'
import { Row, Col } from "react-bootstrap";
import SimpleSlider from "../components/Slider";
import Question from "../components/Form/Question";
//import products onto page.
import products from "../products";
import Product from "../components/Product";

class Serums extends React.Component {
	state = {
		questions: "",
	};

	// Add logic to operate components on page

	// Create function that loads Question
	loadNextQuestion = () => {
		Questions.questions.title
			.then((res) =>
				this.setState({
					question: res.data.questions,
				})
			)
			.catch((err) => console.log(err));
		console.log("A question appeared!!");
	};

	// Add render() to return tags, elements & components onto page
	render() {
		return (
			<>
				<div className='view-container'>
					<div className='title-holder'>
						<h2 className='title-text'>
							Serums That Give You Glowing, Gorgeous Results
						</h2>
					</div>

					{/* <div className='intro-text'>
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
							fragrances or harmful dyes. You won’t find any sulfates,
							formaldehyde, or parabens either. Everything I produce is made
							with 100% vegan ingredients and is never tested on animals.
						</p>
						<p>
							I’ll focus on your needs to create an individual solution and help
							you achieve your skincare goals.
						</p>
					</div>

					<div className='how-to-order-top'>
						<div>
							<h2 className='red-text'>How to Order</h2>
							<h5>
								Select serum(s) in menu below and click Add to Cart. You'll be
								redirected to pay WITH OR WITHOUT PAYPAL.
							</h5>
						</div>
						<div className='serum-order'>
							{/* here is where the code will go for the serum dropdown */}
					{/* </div>
					</div> */}

					{/* <div className='how-to-order-bottom'>
						<div className='thin-lashes'>
							<h2>
								Do You Have Thin Eyelashes or Eyebrows? GiraffeLash is the
								Natural Solution!
							</h2>
							<p>
								All-natural Giraffelash™ has been improved yet again and now
								works faster than ever! This unique blend of Vitamin A and E,
								castor seed oil, and carrot extracts stimulates hair follicles
								and is available in formulations to lengthen, thicken, or both.
								Maintain the effects even after discontinuing use, unlike some
								other products on the market.
							</p>
							<p>
								You’ll see results in as little as 3 DAYS with twice daily
								application, or 1 week if used once, daily. NOT FOR SENSITIVE
								EYES. 3 month supply $50...Or 1 month supply $25.
							</p>
						</div>
						<div className='Hyperpigmentation'>
							<h2>Hyperpigmentation & Melasma</h2>
							<p>
								Fight unsightly dark spots and develop a healthy glow with this
								serum packed with nutrients and enzymes from Vitamin A and C,
								carrot and papaya oils. Reduce discolorations within two weeks
								of regular use as directed. Only to be used at night. 2 month
								supply (.5 oz) is $50.
							</p>
						</div>
						<div className='melatonin'>
							<h2>
								Can't Sleep Peacefully, Even With Melatonin? SLEEP MAGIC Is the
								Natural Solution!
							</h2>
							<p>
								SLEEP MAGIC contains chamomile extracts that help you rest
								soundly. Apply a thin layer of serum to eyelids 30 minutes
								before wanting to sleep and watch the magic happen!
							</p>
						</div>
						<div className='acne'>
							<h2>Acne</h2>
							<p>
								Target your worst breakouts with this proprietary acne-fighting
								formula ideal for sensitive skin. Used as directed, you’ll see
								results within three days to one week. If discoloration or scars
								develop after healing, customize the appropriate treatments
								below for follow-up. 2 month supply (.5 oz) is $45.
							</p>
						</div>
						<div className='anti-aging'>
							<h2>Anti-Aging (Needle-less Solution)</h2>
							<p>
								Carrot extracts, Vitamins C & E, and a special blend of
								essential oils combine to soften lines and smooth wrinkles. Feel
								your skin tightening within minutes of first use. See results in
								as little as one week with regular use as directed. Look 10
								years younger in one month! 2 month supply (.5 oz) is $50.
							</p>
						</div>
						<div className='hair-growth'>
							<h2>Hair Growth</h2>
							<p>
								You’ll see fast and impressive results using these serums to
								fill in a sparse hairline, address thin patches or solve uneven
								growth patterns. A rich mixture of oils — including castor seed,
								papaya, and carrot — works to regenerate cells and stimulate
								hair growth. See results in as little as three days.
							</p>
						</div>
						<div className='rosacea'>
							<h2>Rosacea and Broken Capillaries</h2>
							<p>
								This spray-on formula works to soothe sensitive skin with aloe
								while a B Vitamin complex attacks discoloration, and does
								wonders in as little as one day.
							</p>
						</div>
						<div className='scars'>
							<h2>Scars</h2>
							<p>
								A secret combination of Vitamin E, frankincense and essential
								oils induces collagen production and begins to smooth old or new
								scars overnight when used as directed.
							</p>
						</div>
						<div className='stretch-marks'>
							<h2>Stretch Marks</h2>
							<p>
								Lighten stretch marks in only three weeks with regular use of
								this potent mixture of Vitamins A & C infused with essential
								oils.
							</p>
						</div>
						<div className='guarantee'>
							<h2>My Guarantee</h2>
							<p>
								I want you to be absolutely thrilled with your success and feel
								beautiful. If you’re not completely satisfied after six weeks of
								use as directed, contact me for a completely new formulation at
								no charge. Your specific preparation details will be referenced
								to create a more potent formulation. My goal is to get you
								results!
							</p>
						</div>
						<div className='custom-serum'>
							<h2 className='red-text'>Special Custom Serums</h2>
							<p>
								{" "}
								If you need a special formulation or have very special skin,
								then I can still help you. But I would need some information
								about you.
							</p>
							<p>
								{" "}
								I can create a special formula for you at a special price.
								Quotes will depend on inquiry, but starts at $60.
							</p>
						</div>
					</div> */}

					{/* Products Div */}
					<>
						<h1>Latest Products</h1>
						<Row>
							{products.map((product) => (
								<Col sm={12} md={6} lg={4} xl={3}>
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
	}
}

export default Serums;
