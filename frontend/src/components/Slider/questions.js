//@ts-check


import React from "react";

function Questions(props){
    // let title is added because it will change each time when prompted.
    let title; 

// Create for-loop to pass over next question with event click

// Container for questions
    const questions = [
        {
            title: "1. What are your skin concerns, i.e. rosacea, acne, wrinkles, dark spots, dull skin, dry skin, hyperpigmentation, under eye bags and dark circles, etcele. Be Specific as possible.",
            input: []
        },
        {
            title: "2. What is your skin type? (Dry, combination, normal, sensitive, or oily)",
            input: []
        },
        {
            title: "3. How does your skin respond to peels (if you have had them had them)?",
            input: []
        },
        {
            title: "4. Do you have any known allergies? Please list all:",
            input: []
        },
        {
            title: "5. When your skin is exposed to the sun, does it tan brown, remain the same color, or turn red?",
            input: []
        },
        {
            title: "6. What current products are you using on your skin, i.e. cleanser, scrub, peel, etc.?",
            input: []
        },
        {
            title: "7. Do you have any severe health concerns?",
            input: []
        },
        {
            title: "8. Are you pregnant or breast-feeding?",
            input: []
        },
        {
            title: "9. Anything else you think I should know about your skin?",
            input: []
        },
    
    ]
    
// Return a span tag containing the title of the question; ex. {title}
return <span>{questions.title}</span>;


}


export default Questions
