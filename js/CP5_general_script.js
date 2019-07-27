// Get the modal
var CP5_SC1_modal = document.getElementById("CP5_SC1_myModal");

// Get the button that opens the modal
var CP5_SC1_btn = document.getElementById("CP5_SC1_myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
CP5_SC1_btn.onclick = function () {
    CP5_SC1_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    CP5_SC1_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == CP5_SC1_modal) {
        CP5_SC1_modal.style.display = "none";
    }
}


/*CP5_SC1*/
// When the user clicks the button, open the modal

function CP5_SC1_function_notebtn(i) {
    var Inc_Btn = 'CP5_SC1_inc_Btn' + (i - 1);

    var xx = document.getElementById(Inc_Btn).value;

    if (xx == 100) {
        var ModalVar = 'CP5_SC1_myNoteModal' + i;
        var Inc_noteVar = 'CP5_SC1_inc_noteBtn' + i;
        document.getElementById(ModalVar).style.display = "block";
        document.getElementById(Inc_noteVar).value = ++i;
    }
    else {
        alert('You cannot skip the previos quiz!')
    }
}

// When the user clicks on <span> (x), close the modal
function CP5_SC1_function_notespan(i) {
    var ModalVar = 'CP5_SC1_myNoteModal' + i;

    document.getElementById(ModalVar).style.display = "none";
}

function CP5_SC1_function_btn(i) {
    var Inc_noteVar = 'CP5_SC1_inc_noteBtn' + i;

    var x = document.getElementById(Inc_noteVar).value;
    if (x == i + 1) {
        var ModalVar = 'CP5_SC1_myModal' + i;
        var Inc_Btn = 'CP5_SC1_inc_Btn' + i;

        document.getElementById(ModalVar).style.display = "block";
        document.getElementById(Inc_Btn).value = ++i;
        /*elem.parentNode.removeChild(elem);*/
    }
    else {
        alert("You cannot skip the previous notes!")
    }
}

// When the user clicks on <span> (x), close the modal
function CP5_SC1_function_span(i) {
    var ModalVar = 'CP5_SC1_myModal' + i;

    document.getElementById(ModalVar).style.display = "none";

}
/*====================================================================================================*/
/*CP5_SC2*/

// Get the modal
var CP5_SC2_modal = document.getElementById("CP5_SC2_myModal");

// Get the button that opens the modal
var CP5_SC2_btn = document.getElementById("CP5_SC2_myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal 
CP5_SC2_btn.onclick = function () {
    CP5_SC2_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    CP5_SC2_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == CP5_SC2_modal) {
        CP5_SC2_modal.style.display = "none";
    }
}


/*CP5_SC2*/
// When the user clicks the button, open the modal

function CP5_SC2_function_notebtn(i) {
    var Inc_Btn = 'CP5_SC2_inc_Btn' + (i - 1);

    if (i == 1) {
        document.getElementById(Inc_Btn).value = document.getElementById("CP5_SC1_inc_Btn1").value; /*SC1 is the previous one*/
    }
    var xx = document.getElementById(Inc_Btn).value;

    if (xx == 100) {
        var ModalVar = 'CP5_SC2_myNoteModal' + i;
        var Inc_noteVar = 'CP5_SC2_inc_noteBtn' + i;
        document.getElementById(ModalVar).style.display = "block";
        document.getElementById(Inc_noteVar).value = ++i;
    }
    else {
        alert('You cannot skip the previos quiz!')
    }
}

// When the user clicks on <span> (x), close the modal
function CP5_SC2_function_notespan(i) {
    var ModalVar = 'CP5_SC2_myNoteModal' + i;

    document.getElementById(ModalVar).style.display = "none";
}

function CP5_SC2_function_btn(i) {
    var Inc_noteVar = 'CP5_SC2_inc_noteBtn' + i;

    var x = document.getElementById(Inc_noteVar).value;
    if (x == i + 1) {
        var ModalVar = 'CP5_SC2_myModal' + i;
        var Inc_Btn = 'CP5_SC2_inc_Btn' + i;

        document.getElementById(ModalVar).style.display = "block";
        document.getElementById(Inc_Btn).value = ++i;
        /*elem.parentNode.removeChild(elem);*/
    }
    else {
        alert("You cannot skip the previous notes!")
    }
}

// When the user clicks on <span> (x), close the modal
function CP5_SC2_function_span(i) {
    var ModalVar = 'CP5_SC2_myModal' + i;

    document.getElementById(ModalVar).style.display = "none";

}

/*=====================================================================================================*/
/*CP5_SC3*/

// Get the modal
var CP5_SC3_modal = document.getElementById("CP5_SC3_myModal");

// Get the button that opens the modal
var CP5_SC3_btn = document.getElementById("CP5_SC3_myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[8];

// When the user clicks the button, open the modal 
CP5_SC3_btn.onclick = function () {
    CP5_SC3_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    CP5_SC3_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == CP5_SC3_modal) {
        CP5_SC3_modal.style.display = "none";
    }
}


/*CP5_SC3*/
// When the user clicks the button, open the modal

function CP5_SC3_function_notebtn(i) {
    var Inc_Btn = 'CP5_SC3_inc_Btn' + (i - 1);

    if (i == 1) {
        document.getElementById(Inc_Btn).value = document.getElementById("CP5_SC2_inc_Btn2").value;
    }
    var xx = document.getElementById(Inc_Btn).value;

    if (xx == 100) {
        var ModalVar = 'CP5_SC3_myNoteModal' + i;
        var Inc_noteVar = 'CP5_SC3_inc_noteBtn' + i;
        document.getElementById(ModalVar).style.display = "block";
        document.getElementById(Inc_noteVar).value = ++i;
    }
    else {
        alert('You cannot skip the previos quiz!')
    }
}

// When the user clicks on <span> (x), close the modal
function CP5_SC3_function_notespan(i) {
    var ModalVar = 'CP5_SC3_myNoteModal' + i;

    document.getElementById(ModalVar).style.display = "none";
}

function CP5_SC3_function_btn(i) {
    var Inc_noteVar = 'CP5_SC3_inc_noteBtn' + i;

    var x = document.getElementById(Inc_noteVar).value;
    if (x == i + 1) {
        var ModalVar = 'CP5_SC3_myModal' + i;
        var Inc_Btn = 'CP5_SC3_inc_Btn' + i;

        document.getElementById(ModalVar).style.display = "block";
        document.getElementById(Inc_Btn).value = ++i;
        /*elem.parentNode.removeChild(elem);*/
    }
    else {
        alert("You cannot skip the previous notes!")
    }
}

// When the user clicks on <span> (x), close the modal
function CP5_SC3_function_span(i) {
    var ModalVar = 'CP5_SC3_myModal' + i;

    document.getElementById(ModalVar).style.display = "none";

}


