// import React from "react";
// import ContinueButton from '../buttons/ContinueButton'
// import questions from '../Slider/questions'

// // var to keep track of question state
// var currentQuestionIndex = 0;

// // var to ref DOM elements
// var questionComponent = document.getElementById("questions");
// var submitBtn = document.getElementById("submit");
// var startBtn = document.getElementById("start");
// var feedbackComponent = document.getElementById("feedback")


// // function startQuiz(){
// //     // hides start screen
// //     var startScreen = document.getElementById("start-screen");
// //     startScreen.setAttribute("class", "hide");

// //     // un-hide questions component
// //     questionComponent.removeAttribute("class");

// //     getQuestion();
// // }

// // startQuiz();
// getQuestion();
// function getQuestion(){
//     // gets current question object from array
//     let currentQuestion = questions[currentQuestionIndex];

//     // updates title with current question
//     let questionTitle = document.getElementById("question-title");
//     questionTitle.textContent = questions.title;

//     // clears out old question choices
//     // choicesEl.innerHTML = "";

//     // attach click listener to Continue BTN
//     ContinueButton.onclick = questionClick;
// }

// function questionClick(){

//     // move to next question
//     currentQuestionIndex++;
  
//     // check if we've run out of questions
//     if (currentQuestionIndex === questions.length) {
//       quizEnd();
//     } else {
//       getQuestion();
//     }
  
//   }
  
    
// function quizEnd(){
//     //   hides question section
//       questionComponent.setAttribute("class", "hide");
//   }
  

