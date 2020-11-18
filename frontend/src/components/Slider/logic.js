// import React from "react";
// // // import ContinueButton from '../buttons/ContinueButton'
// // // import questions from '../Slider/questions'
// import $ from "jquery";
// //@ts-check

// // // // var to keep track of question state
// // // var currentQuestionIndex = 0;

// // // // var to ref DOM elements
// // // var questionComponent = document.getElementById("questions");
// // // var submitBtn = document.getElementById("submit");
// // // var startBtn = document.getElementById("start");
// // // var feedbackComponent = document.getElementById("feedback")

// // // // function startQuiz(){
// // // //     // hides start screen
// // // //     var startScreen = document.getElementById("start-screen");
// // // //     startScreen.setAttribute("class", "hide");

// // // //     // un-hide questions component
// // // //     questionComponent.removeAttribute("class");

// // // //     getQuestion();
// // // // }

// // // // startQuiz();
// // // getQuestion();
// // // function getQuestion(){
// // //     // gets current question object from array
// // //     let currentQuestion = questions[currentQuestionIndex];

// // //     // updates title with current question
// // //     let questionTitle = document.getElementById("question-title");
// // //     questionTitle.textContent = questions.title;

// // //     // clears out old question choices
// // //     // choicesEl.innerHTML = "";

// // //     // attach click listener to Continue BTN
// // //     ContinueButton.onclick = questionClick;
// // // }

// // // function questionClick(){

// // //     // move to next question
// // //     currentQuestionIndex++;

// // //     // check if we've run out of questions
// // //     if (currentQuestionIndex === questions.length) {
// // //       quizEnd();
// // //     } else {
// // //       getQuestion();
// // //     }

// // //   }

// // // function quizEnd(){
// // //     //   hides question section
// // //       questionComponent.setAttribute("class", "hide");
// // //   }

// // // insert from CODEPEN

// // // Add push (to store answers)

// var q = 0,
// 	textLongEnough = false,
// 	flagMulti = false,
// 	paramHTML = "";

// $(function () {
// 	$("#wrap").fadeIn(500);
// 	welcomeScreen();
// 	navButtons();

// 	$("#qBox").on("click", ".begin", function () {
// 		reset();
// 	});

// 	$("#aBox").on("click", ".single", function () {
// 		if ($("#wrap").hasClass("paused") === false) {
// 			// Handles trigger questions
// 			if ($(this).hasClass("helpWithWebsite")) {
// 				qa[1].cssQ = "text";
// 			} else {
// 				singleClicked();
// 			}
// 		}
// 	});

// 	// Handles typing in textarea
// 	$("#aBox").on("keyup", ".textArea", function (e) {
// 		var numChars = $(".textArea").val().length;
// 		var minChars = 10;
// 		var submitMarkup = "<div class='inputNext'>Submit</div>";
// 		var submitClass = ".inputNext";

// 		$(".textCounter").html(numChars + " chars");

// 		if ($("#wrap").hasClass("paused")) {
// 			e.preventDefault();
// 		} else {
// 			checkLength(numChars, minChars, submitMarkup, submitClass);
// 		}
// 	});

// 	// Submit textarea
// 	$("#submitBox").on("click", ".inputNext", function () {
// 		if ($("#wrap").hasClass("paused") === false) {
// 			inputClicked();
// 		}
// 	});

// 	// Handles typing in text input
// 	$("#aBox").on("keyup", "input", function (e) {
// 		var numChars = $("input").val().length;
// 		var minChars = 4;
// 		var submitMarkup = "<div class='textNext'>Submit</div>";
// 		var submitClass = ".textNext";

// 		checkLength(numChars, minChars, submitMarkup, submitClass);
// 	});

// 	// Submit text input
// 	$("#submitBox").on("click", ".textNext", function () {
// 		if ($("#wrap").hasClass("paused") === false) {
// 			if ($("input").hasClass("url")) {
// 				var inputValue = $(".url").val();
// 				var inputPre = inputValue.slice(0, 4);

// 				if (inputPre === "http") {
// 					var inputSplit = inputValue.split("://");
// 					inputPre = inputSplit[1].slice(0, 4);
// 					inputValue = inputSplit[1];
// 				}
// 				if (inputPre != "www.") {
// 					inputValue = "www." + inputValue;
// 				}

// 				var firstDotPos = inputValue.indexOf(".");
// 				var lastDotPos = inputValue.lastIndexOf(".");
// 				var textLength = inputValue.length;

// 				if (
// 					firstDotPos === lastDotPos ||
// 					lastDotPos === -1 ||
// 					lastDotPos + 2 >= textLength
// 				) {
// 					$("#error").html(
// 						"That isn't a valid URL.<br>Please enter the address of the website."
// 					);
// 				} else {
// 					$("#error").html("");
// 					textLongEnough = false;
// 					reset();
// 				}
// 			} else {
// 				reset();
// 			}
// 		}
// 	});

// 	// Handles multiple choice selection
// 	$("#aBox").on("click", ".multiple", function () {
// 		if ($("#wrap").hasClass("paused") === false) {
// 			if ($(this).hasClass("selected")) {
// 				$(this).removeClass("selected");
// 				$(this).css("background-color", "#fefefe");
// 				$(this).css("color", "#403e30");
// 				$(this).find("i").removeClass("fa-check-square-o");
// 				$(this).find("i").addClass("fa-square-o");
// 			} else {
// 				$(this).addClass("selected");
// 				$(this).css("background-color", "#00a1e4");
// 				$(this).css("color", "#eee");
// 				$(this).find("i").removeClass("fa-square-o");
// 				$(this).find("i").addClass("fa-check-square-o");
// 			}

// 			if ($(".answers").hasClass("selected")) {
// 				if (flagMulti === false) {
// 					$("<div class='multipleDone'>Submit</div>")
// 						.hide()
// 						.appendTo("#submitBox")
// 						.fadeIn(500);
// 					$("#error").html("");
// 					flagMulti = true;
// 				}
// 			} else {
// 				$(".multipleDone").remove();
// 				$("#error").html("Please select at least one answer");
// 				flagMulti = false;
// 			}
// 		}
// 	});

// 		// Submit multiple choice
// 		$("#submitBox").on("click", ".multipleDone", function () {
// 			if ($("#wrap").hasClass("paused") === false) {
// 				multiClicked();
// 			}
// 		});

// 	// Back button
// 	$("#backIcon").on("click", function () {
// 		if ($("#wrap").hasClass("paused") === false) {
// 			back();
// 		}
// 	});

// 	// Fwd button
// 	$("#fwdIcon").on("click", function () {
// 		if ($("#wrap").hasClass("paused") === false) {
// 			fwd();
// 		}
// 	});

// 	// Exit button
// 	$("#exit").on("click", function () {
// 		if ($("#wrap").hasClass("paused") === false) {
// 			quit();
// 		}
// 	});

// 		// Reopen questionnaire
// 		$("#qOpen").on("click", function () {
// 			//$("#qOpen").click(function() {
// 			reOpen();
// 		});

// 	// Erase Answers and Start Over
// 	$("#startOver").on("click", function () {
// 		verifyStartOver();
// 	});

// 	// Start Over = Cancel
// 	$("#startOverNo").on("click", function () {
// 		$("#verifyBox").animate({ opacity: "0" }, 150);
// 		$("#wrap").removeClass("blurred");
// 		$("#wrap").removeClass("paused");
// 		$(".text").prop("readonly", false);
// 	});

// 	// Star Over = Yes
// 	$("#startOverYes").on("click", function () {
// 		startOver();
// 	});
// }); // end DOM ready function

// // /*****
// // Functions
// // ******/

// function welcomeScreen() {
// 	$("#backIcon").hide();

// 	$(
// 		"<div id='welcome'><h1>Request a Quote</h1>The following questionnaire will take between 5-15 minutes of your time. It will help me determine how I can help you. <br><br> If you're not sure how to answer something, leave it out and we'll discuss it later.</div><div class='begin'>Begin</div>"
// 	)
// 		.hide()
// 		.appendTo("#qBox")
// 		.fadeIn(500);
// }

// function nextQuestion() {
// 	var qClass = qa[q].cssQ;
// 	$("<div class='question'></div>").hide().appendTo("#qBox").fadeIn(500);
// 	$(".question").html(qa[q].question);
// 	$(".question").addClass(qClass);

// 	for (i = 0; i < qa[q].answers.length; i++) {
// 		var aClass = qa[q].cssA[i];
// 		var answer = qa[q].answers[i];

// 		$("<div class='answers " + qClass + " " + aClass + "'>" + answer + "</div>")
// 			.hide()
// 			.appendTo("#aBox")
// 			.fadeIn(900);
// 	}
// 	if (qClass === "multiple") {
// 		$("<i class='fa fa-square-o'></i> ")
// 			.hide()
// 			.prependTo(".answers")
// 			.fadeIn(900);
// 	} else if (qClass === "input") {
// 		$("<div class='textCounter'></div>").appendTo(".answers");
// 	}
// 	q += 1;
// 	navButtons();
// }

// function singleClicked() {
// 	// store answer
// 	reset();
// }

// function inputClicked() {
// 	// store answer
// 	textLongEnough = false;
// 	reset();
// }

// function multiClicked() {
// 	// store answer
// 	flagMulti = false;
// 	reset();
// }

// // Check textarea and text input
// function checkLength(numChars, minChars, submitMarkup, submitClass) {
// 	$(".textCounter").addClass("red");
// 	if (numChars < minChars) {
// 		if (textLongEnough === true) {
// 			$(submitClass).remove();
// 			$("#error").html("Your answer is too short");
// 			textLongEnough = false;
// 		}
// 	} else if ((numChars = minChars) || numChars > minChars) {
// 		$(".textCounter").removeClass("red");
// 		if (textLongEnough === false) {
// 			$("#error").html("");
// 			$(submitMarkup).hide().appendTo("#submitBox").fadeIn(500);
// 			textLongEnough = true;
// 		}
// 	}
// }

// function reset() {
// 	$("#welcome").remove();
// 	$(".begin").remove();
// 	$(".question").remove();
// 	$(".answers").remove();
// 	$(".inputNext").remove();
// 	$(".textURLNext").remove();
// 	$(".textNext").remove();
// 	$(".multipleDone").remove();
// 	$("#error").html("");
// 	nextQuestion();
// // }

// function quit() {
// 	$("#wrap").hide();
// 	$("#qOpen").animate({ bottom: "0px" }, 200);
// }

// function reOpen() {
// 	$("#wrap").fadeIn();
// 	$("#qOpen").animate({ bottom: "-50px" }, 200);
// }

// function back() {
// 	q = q - 2;
// 	navButtons();
// 	reset();
// }

// function fwd() {
// 	navButtons();
// 	reset();
// }

// function navButtons() {
// 	if (q > 0) {
// 		$("#backIcon").fadeIn(400);
// 	} else if (q === qa.length) {
// 		$("#fwdIcon").hide();
// 	} else if (q < 0) {
// 		// fix this
// 		$("#fwdIcon").fadeIn(400);
// 	} else {
// 		$("#backIcon").hide();
// 	}
// };

// function verifyStartOver() {
// 	window.scrollTo(0, 0);
// 	$("#wrap").addClass("blurred");
// 	$("#wrap").addClass("paused");
// 	$(".text").prop("readonly", true);
// 	$("#verifyBox").animate({ opacity: "1" }, 150);
// };

// function startOver() {
// 	var q = 0;
// 	textLongEnough = false;
// 	flagMultiple = false;
// 	paramHTML = "";
// 	$("#verifyBox").animate({ opacity: "0" }, 150);
// 	$("#wrap").removeClass("blurred");
// 	$("#wrap").removeClass("paused");
// 	reset();
// };

// // CREATE NEXT
// //var storeAnswers = new Array();
