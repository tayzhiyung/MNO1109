var CP2_SC1_myQuestions1 = [
    {
        question: "Which of the statement about Simpson's rules is incorrect? ",
        answers: {
            a: 'It is used to find area under an irregular curve',
            b: 'It can be used to find the volume and area of ship',
            c: 'It can be used to find the centre of flotation and centre of buoyancy of ship',
            d: 'The curve considered in the approximate integration does not need to be continuos'
        },
        correctAnswer: 'd'
    }
];

var CP2_SC1_myQuestions2 = [
    {
        question: "If the half-ordinate of a ship appendage is given as y1 = 0m, y2 = 4m, y3 =2m and these half-ordinates are spaced at a 2m interval, what is the waterplane area of the appendage?",
        answers: {
            a: '2m&#178',
            b: '4m&#178',
            c: '6m&#178',
            d: '12m&#178'
        },
        correctAnswer: 'd'
    },

];

var CP2_SC1_myQuestions3 = [
    
     {
        question: "If the waterplane area of a ship at four different drafts A1 = 200m&#178, A2 = 300m&#178, A3 =360m&#178, A4 = 400m&#178 and draft are taken at 3m interval, what is the displace volume of the ship?",
        answers: {
            a: '1417m&#179',
            b: '967m&#179',
            c: '2902m&#179',
            d: '3100.6m&#179'
        },
        correctAnswer: 'c'
    },

];
var CP2_SC1_quizContainer1 = document.getElementById('CP2_SC1_quiz1');
var CP2_SC1_resultsContainer1 = document.getElementById('CP2_SC1_results1');
var CP2_SC1_submitButton1 = document.getElementById('CP2_SC1_submit1');
var CP2_SC1_incBtn1 = 'CP2_SC1_inc_Btn1';
var CP2_SC1_topic1_no = '1';
var CP2_SC1_question1_no = '1';

var CP2_SC1_quizContainer2 = document.getElementById('CP2_SC1_quiz2');
var CP2_SC1_resultsContainer2 = document.getElementById('CP2_SC1_results2');
var CP2_SC1_submitButton2 = document.getElementById('CP2_SC1_submit2');
var CP2_SC1_incBtn2 = 'CP2_SC1_inc_Btn2';
var CP2_SC1_topic1_no = '1';
var CP2_SC1_question2_no = '2';

var CP2_SC1_quizContainer3 = document.getElementById('CP2_SC1_quiz3');
var CP2_SC1_resultsContainer3 = document.getElementById('CP2_SC1_results3');
var CP2_SC1_submitButton3 = document.getElementById('CP2_SC1_submit3');
var CP2_SC1_incBtn3 = 'CP2_SC1_inc_Btn3';
var CP2_SC1_topic1_no = '1';
var CP2_SC1_question3_no = '3';
var score_sum = [0];

generateQuiz(CP2_SC1_myQuestions1, CP2_SC1_quizContainer1, CP2_SC1_resultsContainer1, CP2_SC1_submitButton1, score_sum, CP2_SC1_topic1_no, CP2_SC1_question1_no, CP2_SC1_incBtn1);
generateQuiz(CP2_SC1_myQuestions2, CP2_SC1_quizContainer2, CP2_SC1_resultsContainer2, CP2_SC1_submitButton2, score_sum, CP2_SC1_topic1_no, CP2_SC1_question2_no, CP2_SC1_incBtn2);
generateQuiz(CP2_SC1_myQuestions3, CP2_SC1_quizContainer3, CP2_SC1_resultsContainer3, CP2_SC1_submitButton3, score_sum, CP2_SC1_topic1_no, CP2_SC1_question3_no, CP2_SC1_incBtn3);

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
                answerContainers[i].style.color = 'lightgreen';
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
