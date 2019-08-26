var CP1a_SC2_myQuestions1 = [

    {
        question: "Which of the following is not the hull form coefficients?",
        answers: {
            a: 'Block Coefficient',
            b: 'Water-plane Area Coefficent',
            c: 'Cross-sectional Area Coefficient',
            d: 'Prismatic Coefficient'
        },
        correctAnswer: 'c'
    }
];

var CP1a_SC2_myQuestions2 = [
    {
        question: "What is  the CM for a ship with a length of 100m, breadth of 20m and draft of 20m? The ship has a midship cross section of 300m2 and a waterplane area of 1600m2.",
        answers: {
            a: '0.80',
            b: '0.75',
            c: '0.60',
            d: '0.55'
        },
        correctAnswer: 'b'
    },

];


var CP1a_SC2_myQuestions5 = [
    {
        question: "A ship has a block coefficeint of 0.8 and a midship area coefficeint of 0.6. What is the Midship Area of the ship if the length of the ship is 150m and the displacement volume is 42,000m&#179?",
        answers: {
            a: '210.0m&#178',
            b: '262.5m&#178',
            c: '300.2m&#178',
            d: '350.4m&#178'
        },
        correctAnswer: 'a'
    },

];
var CP1a_SC2_quizContainer1 = document.getElementById('CP1a_SC2_quiz1');
var CP1a_SC2_resultsContainer1 = document.getElementById('CP1a_SC2_results1');
var CP1a_SC2_submitButton1 = document.getElementById('CP1a_SC2_submit1');
var CP1a_SC2_incBtn1 = 'CP1a_SC2_inc_Btn1';
var CP1a_SC2_topic1_no = '1';
var CP1a_SC2_question1_no = '1';

var CP1a_SC2_quizContainer2 = document.getElementById('CP1a_SC2_quiz2');
var CP1a_SC2_resultsContainer2 = document.getElementById('CP1a_SC2_results2');
var CP1a_SC2_submitButton2 = document.getElementById('CP1a_SC2_submit2');
var CP1a_SC2_incBtn2 = 'CP1a_SC2_inc_Btn2';
var CP1a_SC2_topic1_no = '1';
var CP1a_SC2_question2_no = '2';

var CP1a_SC2_quizContainer5 = document.getElementById('CP1a_SC2_quiz5');
var CP1a_SC2_resultsContainer5 = document.getElementById('CP1a_SC2_results5');
var CP1a_SC2_submitButton5 = document.getElementById('CP1a_SC2_submit5');
var CP1a_SC2_incBtn5 = 'CP1a_SC2_inc_Btn5';
var CP1a_SC2_topic1_no = '1';
var CP1a_SC2_question5_no = '3';

var score_sum = [0];

/*score_sum.push(document.getElementById('totScore').value)*/

generateQuiz(CP1a_SC2_myQuestions1, CP1a_SC2_quizContainer1, CP1a_SC2_resultsContainer1, CP1a_SC2_submitButton1, score_sum, CP1a_SC2_topic1_no, CP1a_SC2_question1_no, CP1a_SC2_incBtn1);
generateQuiz(CP1a_SC2_myQuestions2, CP1a_SC2_quizContainer2, CP1a_SC2_resultsContainer2, CP1a_SC2_submitButton2, score_sum, CP1a_SC2_topic1_no, CP1a_SC2_question2_no, CP1a_SC2_incBtn2);
generateQuiz(CP1a_SC2_myQuestions5, CP1a_SC2_quizContainer5, CP1a_SC2_resultsContainer5, CP1a_SC2_submitButton5, score_sum, CP1a_SC2_topic1_no, CP1a_SC2_question5_no, CP1a_SC2_incBtn5);

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
