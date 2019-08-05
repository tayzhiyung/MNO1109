var CP1a_SC1_myQuestions1 = [


    {
        question: "Which of the following statements is not true about linesplan?",
        answers: {
            a: 'Linesplan is used to represent the irregular shape of a ship',
            b: 'Linesplan is represented usually by three sets a plane',
            c: 'The planes in a linesplane are orthogonal to each other',
            d: 'It is impossible to determine the shape of the ship just by a single projection plane in the linesplane',
        },
        correctAnswer: 'd'
    }
];

var CP1a_SC1_myQuestions2 = [
    {
        question: "Which of the following is a curve line in the Body Plan?",
        answers: {
            a: 'Station',
            b: 'Buttock Lines',
            c: 'Waterline',
            d: 'None of the Above'
        },
        correctAnswer: 'a'
    },

];

var CP1a_SC1_myQuestions5 = [
    {
        question: "Which of the following lines is not straight in the body plan?",
        answers: {
            a: 'Stations',
            b: 'Waterlines',
            c: 'Buttock Lines',
            d: 'None of the Above'
        },
        correctAnswer: 'a'
    },

];
var CP1a_SC1_quizContainer1 = document.getElementById('CP1a_SC1_quiz1');
var CP1a_SC1_resultsContainer1 = document.getElementById('CP1a_SC1_results1');
var CP1a_SC1_submitButton1 = document.getElementById('CP1a_SC1_submit1');
var CP1a_SC1_incBtn1 = 'CP1a_SC1_inc_Btn1';
var CP1a_SC1_topic1_no = '1';
var CP1a_SC1_question1_no = '1';

var CP1a_SC1_quizContainer2 = document.getElementById('CP1a_SC1_quiz2');
var CP1a_SC1_resultsContainer2 = document.getElementById('CP1a_SC1_results2');
var CP1a_SC1_submitButton2 = document.getElementById('CP1a_SC1_submit2');
var CP1a_SC1_incBtn2 = 'CP1a_SC1_inc_Btn2';
var CP1a_SC1_topic1_no = '1';
var CP1a_SC1_question2_no = '2';

var CP1a_SC1_quizContainer5 = document.getElementById('CP1a_SC1_quiz5');
var CP1a_SC1_resultsContainer5 = document.getElementById('CP1a_SC1_results5');
var CP1a_SC1_submitButton5 = document.getElementById('CP1a_SC1_submit5');
var CP1a_SC1_incBtn5 = 'CP1a_SC1_inc_Btn5';
var CP1a_SC1_topic1_no = '1';
var CP1a_SC1_question5_no = '3';
var score_sum = [0];

generateQuiz(CP1a_SC1_myQuestions1, CP1a_SC1_quizContainer1, CP1a_SC1_resultsContainer1, CP1a_SC1_submitButton1, score_sum, CP1a_SC1_topic1_no, CP1a_SC1_question1_no, CP1a_SC1_incBtn1);
generateQuiz(CP1a_SC1_myQuestions2, CP1a_SC1_quizContainer2, CP1a_SC1_resultsContainer2, CP1a_SC1_submitButton2, score_sum, CP1a_SC1_topic1_no, CP1a_SC1_question2_no, CP1a_SC1_incBtn2);
generateQuiz(CP1a_SC1_myQuestions5, CP1a_SC1_quizContainer5, CP1a_SC1_resultsContainer5, CP1a_SC1_submitButton5, score_sum, CP1a_SC1_topic1_no, CP1a_SC1_question5_no, CP1a_SC1_incBtn5);

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
                '<div class="question">' + questions[i].question +'</div>'
                + '<div class="answers">' + answers.join('')  +'\n' + '</div>'
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
                /*alert(score_sum)*/
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
        
        localStorage.setItem("finalScore", document.getElementById("totScore").value)
        /*var yyy = localStorage.getItem("finalScore")
        alert(yyy)*/
    
    }
}

/*----------------------------------------------------*/
