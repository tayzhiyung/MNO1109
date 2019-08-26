var response = [];
var CP1a_SC3_score_sum_n3 = [0];
var CP1a_SC3_score_sum_n4 = [0];

var CP1a_SC3_incBtn3 = 'CP1a_SC3_inc_Btn3';
var CP1a_SC3_incBtn4 = 'CP1a_SC3_inc_Btn4';

CP1a_SC3_click_no3 = document.getElementById("CP1a_SC3_click_no3").value;
CP1a_SC3_click_no4 = document.getElementById("CP1a_SC3_click_no4").value;

var CP1a_SC3_answer_list3 =
    ['hull weight', 'machinery', 'outfitting']
var CP1a_SC3_answer_list4 =
    ['cargo', 'crew', 'water']

function CP1a_SC3_CheckAnswers3() {
    CP1a_SC3_CheckAnswers(CP1a_SC3_click_no3, CP1a_SC3_answer_list3, CP1a_SC3_score_sum_n3, CP1a_SC3_incBtn3)
}
function CP1a_SC3_CheckAnswers4() {
    CP1a_SC3_CheckAnswers(CP1a_SC3_click_no4, CP1a_SC3_answer_list4, CP1a_SC3_score_sum_n4, CP1a_SC3_incBtn4)
}

// Note: No comma after final entry

function setAnswer(question, answer) {
    response = answer;
}

function CP1a_SC3_CheckAnswers(click_no, answer_list, score_sum_n, incBtn) {

    var correct = 0;
    var resp, answ;
    click_no++;

    for (var i = 0; i < answer_list.length; i++) {
        resp = response[i].toString();
        resp = resp.toLowerCase();
        answ = answer_list[i].toString();
        answ = answ.toLowerCase();

        if (resp == answ)
            correct++

    }
    var score_sum = Math.round((correct / answer_list.length) * 10);
    alert("Score=" + score_sum + ', You get ' + (correct) + ' answer(s) correct! \nCorrect answer is: ' + answer_list);
    var score_sum_i = document.getElementById("totScore").value;

    score_sum_n.push(score_sum_i * 1 + score_sum * 1);

    document.getElementById('totScore').value = score_sum_n[1];
    document.getElementById(incBtn).value = 100;
    localStorage.setItem("finalScore", document.getElementById("totScore").value);

}
