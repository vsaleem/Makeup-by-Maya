//@ts-check
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState } from "react";
import Slider from 'react-slick';
import ContinueButton from '../buttons/ContinueButton'
import UserForm from '../Form/UserForm'
import './style.css'
import './logic'
import Questions from './questions'

// import '../Survey/index'

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      arrows: true,
      dots: true,
      draggable: true,
      fade: true,
      // fOS operates next submit btn
      // focusOnSelect: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slides'
    };
    return (
      <div className="quiz">
      <Slider {...settings} className="">
      
      {/* <div id="surveyElement" style="display:inline-block;width:100%;"></div>
      <div id="surveyResult"></div>
 */}
        <div className="quizWrapper hide" id="questions">
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
          {/* <UserForm /> */}
        </div>
      </Slider>
      </div>
    );
  }
}

export default SimpleSlider;