//@ts-check
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import "./style.css";
import "./logic";
// import Questions from "./questions";
// import Slider from "react-slick";
// import ContinueButton from "../buttons/ContinueButton";
// import UserForm from "../Form/UserForm";
// import '../Survey/index'

class SimpleSlider extends React.Component {
	render() {
		// var settings = {
		//   arrows: true,
		//   dots: true,
		//   draggable: true,
		//   fade: true,
		//   // fOS operates next submit btn
		//   // focusOnSelect: false,
		//   infinite: true,
		//   speed: 500,
		//   slidesToShow: 1,
		//   slidesToScroll: 1,
		//   className: 'slides'
		// };
		return (
			// GLOBAL PARENT DIV
			<div className='quiz'>
				{/* <Slider {...settings} className=""> */}

				{/* <div id="surveyElement" style="display:inline-block;width:100%;"></div>
      			<div id="surveyResult"></div>*/}

				{/* <div className="quizWrapper hide" id="questions">
					<h3 className="questions" id="question-title">
						<Questions />
					</h3>
						<form className="textbox">
						<input type="text input" id="submit" value="" />
						</form>
						<br />
					<ContinueButton/>
					</div >

					<div className="quizWrapper">
					</div>
				</Slider> */}

				{/* PARENT DIV */}
				<div id='verifyBox'>
					<div id='verifyQ'>
						Are you sure you want to start over?
						<br />
						All of your answers will be erased.
					</div>

					<div className='flexContainer'>
						<div className='flexItem' id='startOverNo'>
							Cancel
						</div>
						<div className='flexItem' id='startOverYes'>
							Start Over
						</div>
					</div>
				</div>

				<div id='wrap'>
					<div id='exit'>
						<i className='fa fa-close'></i>
					</div>

					<div id='qBox'></div>
					<div className='flexContainer'>
						<div className='flexItem' id='back'>
							<div id='backIcon'>
								<i className='fa fa-chevron-left'>
									<b>{" Back"}</b>
								</i>
							</div>
						</div>

						<div className='flexItem' id='aBox'></div>
						<div className='flexItem' id='fwd'>
							<div id='fwdIcon'>
								<b>{"Next "}</b>
								<i className='fa fa-chevron-right'></i>
							</div>
						</div>
					</div>

					<div id='errorBox'>
						<div id='error'></div>
					</div>

					<div id='submitBox'></div>
					<div id='startOver'>Erase Answers and Start Over</div>
				</div>

				<div id='qOpen'>Skin Care Questionnaire</div>
			</div>
		);
	}
}

export default SimpleSlider;
