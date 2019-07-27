// Get the modal
var CP6_SC1_modal = document.getElementById("CP6_SC1_myModal");

// Get the button that opens the modal
var CP6_SC1_btn = document.getElementById("CP6_SC1_myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
CP6_SC1_btn.onclick = function () {
    CP6_SC1_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    CP6_SC1_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == CP6_SC1_modal) {
        CP6_SC1_modal.style.display = "none";
    }
}


/*CP6_SC1*/
// When the user clicks the button, open the modal

function CP6_SC1_function_notebtn(i) {
    var Inc_Btn = 'CP6_SC1_inc_Btn' + (i - 1);

    var xx = document.getElementById(Inc_Btn).value;

    if (xx == 100) {
        var ModalVar = 'CP6_SC1_myNoteModal' + i;
        var Inc_noteVar = 'CP6_SC1_inc_noteBtn' + i;
        document.getElementById(ModalVar).style.display = "block";
        document.getElementById(Inc_noteVar).value = ++i;
    }
    else {
        alert('You cannot skip the previos quiz!')
    }
}

// When the user clicks on <span> (x), close the modal
function CP6_SC1_function_notespan(i) {
    var ModalVar = 'CP6_SC1_myNoteModal' + i;

    document.getElementById(ModalVar).style.display = "none";
}

function CP6_SC1_function_btn(i) {
    var Inc_noteVar = 'CP6_SC1_inc_noteBtn' + i;

    var x = document.getElementById(Inc_noteVar).value;
    if (x == i + 1) {
        var ModalVar = 'CP6_SC1_myModal' + i;
        var Inc_Btn = 'CP6_SC1_inc_Btn' + i;

        document.getElementById(ModalVar).style.display = "block";
        document.getElementById(Inc_Btn).value = ++i;
        /*elem.parentNode.removeChild(elem);*/
    }
    else {
        alert("You cannot skip the previous notes!")
    }
}

// When the user clicks on <span> (x), close the modal
function CP6_SC1_function_span(i) {
    var ModalVar = 'CP6_SC1_myModal' + i;

    document.getElementById(ModalVar).style.display = "none";

}
