var CP1_SC5_myQuestions1 = [
    {
        question: "If the TPC for a ship is 20 tonnes/cm, what is the change in draft if a load of 50 tonnes is discharged from the ship?",
        answers: {
            a: 'increase by 2.5cm',
            b: 'increase by 1cm',
            c: 'decrease by 1cm',
            d: 'decrease by 2.5cm'
        },
        correctAnswer: 'd'
    }
];

 var CP1_SC5_myQuestions2 = [
    {
        question: "A ship  has a LOA of 150m, B of 25m and T of 20m. Its waterplane area coefficent is given as 0.75. What is the new draft if a cargo of 20tonnes is loaded on the ship?",
        answers: {
            a: '18.5m',
            b: '20.7m',
            c: '22.3m',
            d: '24.6m'
        },
        correctAnswer: 'b'
    },

];

var CP1_SC5_quizContainer1 = document.getElementById('CP1_SC5_quiz1');
var CP1_SC5_resultsContainer1 = document.getElementById('CP1_SC5_results1');
var CP1_SC5_submitButton1 = document.getElementById('CP1_SC5_submit1');
var CP1_SC5_incBtn1 = 'CP1_SC5_inc_Btn1';
var CP1_SC5_topic1_no = '1';
var CP1_SC5_question1_no = '1';

var CP1_SC5_quizContainer2 = document.getElementById('CP1_SC5_quiz2');
var CP1_SC5_resultsContainer2 = document.getElementById('CP1_SC5_results2');
var CP1_SC5_submitButton2 = document.getElementById('CP1_SC5_submit2');
var CP1_SC5_incBtn2 = 'CP1_SC5_inc_Btn2';
var CP1_SC5_topic1_no = '1';
var CP1_SC5_question2_no = '2';

var score_sum = [0];

/*score_sum.push(document.getElementById('totScore').value)*/

generateQuiz(CP1_SC5_myQuestions1, CP1_SC5_quizContainer1, CP1_SC5_resultsContainer1, CP1_SC5_submitButton1, score_sum, CP1_SC5_topic1_no, CP1_SC5_question1_no, CP1_SC5_incBtn1);
generateQuiz(CP1_SC5_myQuestions2, CP1_SC5_quizContainer2, CP1_SC5_resultsContainer2, CP1_SC5_submitButton2, score_sum, CP1_SC5_topic1_no, CP1_SC5_question2_no, CP1_SC5_incBtn2);

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
