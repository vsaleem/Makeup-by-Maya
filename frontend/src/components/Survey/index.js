import React from 'react'; 
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    questions: [
        {
            type: "comment",
            name: "suggestions",
            title: "What would make you more satisfied with the Product?"
        }
    ]
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function(result) {
        document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("surveyElement"));