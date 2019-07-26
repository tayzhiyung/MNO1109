
function CP1_SC2_function_notebtn(i) {
    var Inc_Btn = 'CP1_SC2_inc_Btn' + (i - 1);

    var xx = document.getElementById(Inc_Btn).value;

    if (xx == 100) {
        var ModalVar = 'CP1_SC2_myNoteModal' + i;
        var Inc_noteVar = 'CP1_SC2_inc_noteBtn' + i;
        document.getElementById(ModalVar).style.display = "block";
        document.getElementById(Inc_noteVar).value = ++i;
    }
    else {
        alert('You cannot skip the previos quiz!')
    }
}

// When the user clicks on <span> (x), close the modal
function CP1_SC2_function_notespan(i) {
    var ModalVar = 'CP1_SC2_myNoteModal' + i;

    document.getElementById(ModalVar).style.display = "none";
}

function CP1_SC2_function_btn(i) {
    var Inc_noteVar = 'CP1_SC2_inc_noteBtn' + i;

    var x = document.getElementById(Inc_noteVar).value;
    if (x == i + 1) {
        var ModalVar = 'CP1_SC2_myModal' + i;
        var Inc_Btn = 'CP1_SC2_inc_Btn' + i;

        document.getElementById(ModalVar).style.display = "block";
        document.getElementById(Inc_Btn).value = ++i;
        /*elem.parentNode.removeChild(elem);*/
    }
    else {
        alert("You cannot skip the previous notes!")
    }
}

// When the user clicks on <span> (x), close the modal
function CP1_SC2_function_span(i) {
    var ModalVar = 'CP1_SC2_myModal' + i;

    document.getElementById(ModalVar).style.display = "none";

}
