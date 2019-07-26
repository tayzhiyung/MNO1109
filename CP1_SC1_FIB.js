var response = [];
var CP1_SC1_score_sum_n3 = [0];
var CP1_SC1_score_sum_n4 = [0];

var CP1_SC1_incBtn3 = 'CP1_SC1_inc_Btn3';
var CP1_SC1_incBtn4 = 'CP1_SC1_inc_Btn4';


CP1_SC1_click_no3 = document.getElementById("CP1_SC1_click_no3").value;
CP1_SC1_click_no4 = document.getElementById("CP1_SC1_click_no4").value;


var CP1_SC1_answer_list3 =
    ['curvelinear', 'buttock lines', 'sheer plane']
var CP1_SC1_answer_list4 =
    ['symmetrical', 'waterlines', 'half-ordinates']

function CP1_SC1_CheckAnswers3() {
    CP1_SC1_CheckAnswers(CP1_SC1_click_no3, CP1_SC1_answer_list3, CP1_SC1_score_sum_n3, CP1_SC1_incBtn3)
}
function CP1_SC1_CheckAnswers4() {
    CP1_SC1_CheckAnswers(CP1_SC1_click_no4, CP1_SC1_answer_list4, CP1_SC1_score_sum_n4, CP1_SC1_incBtn4)
}

// Note: No comma after final entry

function setAnswer(question, answer) {
    response = answer;

}

function CP1_SC1_CheckAnswers(click_no, answer_list, score_sum_n, incBtn) {

    var correct = 0;
    var resp, answ;
    click_no++;
    
    for (var i = 0; i < answer_list.length; i++) {
        resp = response[i].toString();
        resp = resp.toLowerCase();
        answ = answer_list[i].toString();
        answ = answ.toLowerCase();

        if (resp == answ){
            correct++;
 
            document.getElementById(incBtn).value = 100;
        }
            
    }
    var score_sum = Math.round((correct / answer_list.length) * 10);
    alert("Score=" + score_sum + ', You get ' + (correct) + ' answer(s) correct! \nCorrect answer is: ' + answer_list);
    var score_sum_i = document.getElementById("totScore").value;

    score_sum_n.push(score_sum_i * 1 + score_sum * 1);

    document.getElementById('totScore').value = score_sum_n[1];
    document.getElementById(incBtn).value = 100;

    localStorage.setItem("finalScore", document.getElementById("totScore").value);



}
