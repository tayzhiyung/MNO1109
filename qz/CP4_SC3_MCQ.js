var CP4_SC3_myQuestions1 = [
    {
        question: "Which of the following does not increase the stability of the ship?",
        answers: {
            a: 'Lower CoG', 
            b: 'Increase CoB',
            c: 'Increase BML', 
            d: 'Increase M'
        },
        correctAnswer: 'b'
    }
];

var CP4_SC3_myQuestions2 = [
    {
        question: "Which of the following does not increase the stability of the ship?",
        answers: {
            a: 'Increase freeboard',
            b: 'Increase beam',
            c: 'Increase waterplane area',
            d: 'Increase draft',
        },
        correctAnswer: 'd'
    },

];

var CP4_SC3_quizContainer1 = document.getElementById('CP4_SC3_quiz1');
var CP4_SC3_resultsContainer1 = document.getElementById('CP4_SC3_results1');
var CP4_SC3_submitButton1 = document.getElementById('CP4_SC3_submit1');
var CP4_SC3_incBtn1 = 'CP4_SC3_inc_Btn1';
var CP4_SC3_topic1_no = '1';
var CP4_SC3_question1_no = '1';

var CP4_SC3_quizContainer2 = document.getElementById('CP4_SC3_quiz2');
var CP4_SC3_resultsContainer2 = document.getElementById('CP4_SC3_results2');
var CP4_SC3_submitButton2 = document.getElementById('CP4_SC3_submit2');
var CP4_SC3_incBtn2 = 'CP4_SC3_inc_Btn2';
var CP4_SC3_topic1_no = '1';
var CP4_SC3_question2_no = '2';

var score_sum = [0];

/*score_sum.push(document.getElementById('totScore').value)*/

generateQuiz(CP4_SC3_myQuestions1, CP4_SC3_quizContainer1, CP4_SC3_resultsContainer1, CP4_SC3_submitButton1, score_sum, CP4_SC3_topic1_no, CP4_SC3_question1_no, CP4_SC3_incBtn1);
generateQuiz(CP4_SC3_myQuestions2, CP4_SC3_quizContainer2, CP4_SC3_resultsContainer2, CP4_SC3_submitButton2, score_sum, CP4_SC3_topic1_no, CP4_SC3_question2_no, CP4_SC3_incBtn2);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton, score_sum, topic_no, question_no, incBtn) {

    function showQuestions(questions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // first reset the list of answers
            answers = [];

            // for each available answer...
            for (letter in questions[i].answers) {

                // ...add an html radio button
                answers.push(
                    '<ul>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</ul>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer, topic_no, question_no, score_sum_i, incBtn) {

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';


        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
            
            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                if (numCorrect == 0) {
                    if (click_no == 0) {
                        numCorrect = numCorrect + 10 + score_sum_i * 1;
                    } else if (click_no == 1) {
                        numCorrect = numCorrect + 5 + score_sum_i * 1;
                    } else if (click_no == 2) {
                        numCorrect = numCorrect + 3 + score_sum_i * 1;
                    } else if (click_no == 3) {
                        numCorrect = numCorrect + 1 + score_sum_i * 1;
                    }
                    else {
                        numCorrect = numCorrect + 1 + score_sum_i * 1;
                    }
                } else if (numCorrect > 0) {
                    if (click_no == 1) {
                        numCorrect = numCorrect;
                    }
                }


                // color the answers green
                answerContainers[i].style.color = 'green';
                /*score_sum.push(numCorrect);*/
                score_sum[topic_no, question_no] = numCorrect;
                
            }
            // if answer is wrong or blank
            else {
                
                score_sum[topic_no, question_no] = score_sum_i * 1;
                // color the answers red
                answerContainers[i].style.color = 'red';
                alert("Wrong! Please Try Again")
                

            }

        }
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + 'Marks'

        // show number of correct answers out of total
        if (numCorrect > 0) {
            /*alert("Correct!")*/
            document.getElementById(incBtn).value = 100;
        }
        else {
            /*alert("Wrong! Please Try Again")*/
        }
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    var numCorrect = 0;
    var click_no = 0;


    // on submit, show results
    submitButton.onclick = function () {
        var score_sum_i = document.getElementById("totScore").value;

        showResults(questions, quizContainer, resultsContainer, topic_no, question_no, score_sum_i, incBtn);
        click_no++

        document.getElementById('totScore').value = score_sum[score_sum.length - 1];
        /*console.log(
            
            document.getElementById('totScore').value = score_sum.reduce((a, b) => a + b, 0)
        )*/

        /*alert(click_no++ + numCorrect)*/
        localStorage.setItem("finalScore", document.getElementById("totScore").value);
    }
}

/*----------------------------------------------------*/
