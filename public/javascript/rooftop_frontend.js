let step = document.getElementsByClassName("step");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let submitBtn = document.getElementById("submit-btn");
let bodyElement = document.querySelector("body");

//Success Msg
let succcessDiv = document.getElementById("success");

// Define steps, prev, next, submit btn
//Change stepCount according to pages of form!!
let current_step = 0;
let stepCount = 6;
step[current_step].classList.add("d-block");
if (current_step == 0) {
    prevBtn.classList.add("d-none");
    submitBtn.classList.add("d-none");
    nextBtn.classList.add("d-inline-block");
}


//Check now, partly check, completed buttons
$(() => {
    for (let i = 0; i < $('.check-now-btn').length; i++) {
        $('.check-now-btn')[i].classList.add("d-block");
        $('.partly-checked-btn')[i].classList.add("d-none");
        $('.completed-btn')[i].classList.add("d-none");
    }
})


const showCheckNow = (i) => {
    $('.check-now-btn')[i].classList.remove("d-none");
    $('.check-now-btn')[i].classList.add("d-block");
    $('.partly-checked-btn')[i].classList.add("d-none");
    $('.partly-checked-btn')[i].classList.remove("d-block");
    $('.completed-btn')[i].classList.add("d-none");
    $('.completed-btn')[i].classList.remove("d-block");
}

const showCompleted = (i) => {
    $('.check-now-btn')[i].classList.add("d-none");
    $('.check-now-btn')[i].classList.remove("d-block");
    $('.partly-checked-btn')[i].classList.add("d-none");
    $('.partly-checked-btn')[i].classList.remove("d-block");
    $('.completed-btn')[i].classList.remove("d-none");
    $('.completed-btn')[i].classList.add("d-block");
}

const showPartlyComplete = (i) => {
    $('.check-now-btn')[i].classList.add("d-none");
    $('.check-now-btn')[i].classList.remove("d-block");
    $('.partly-checked-btn')[i].classList.remove("d-none");
    $('.partly-checked-btn')[i].classList.add("d-block");
    $('.completed-btn')[i].classList.add("d-none");
    $('.completed-btn')[i].classList.remove("d-block");
}

//Form submit
$("#farm-log").submit((e) => {
    e.preventDefault();
    console.log("submit!");
    let serializeArray = $("#farm-log").serializeArray();
    console.log(serializeArray);
});

// Progress bar
function activeDot(index) {
    // Romove 'active' from all class
    const x = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //Add 'active' to current step
    x[index].className += " active";
}

// Next btn flex end
const checkNextButton = () => {
    if (current_step == 0) {
        $("#q-box__buttons").addClass("d-flex justify-content-end");
    } else {
        $("#q-box__buttons").removeClass("d-flex justify-content-end");
    }
};

// Click next btn
nextBtn.addEventListener("click", () => {
    current_step++;
    let previous_step = current_step - 1;

    if (current_step > 0 && current_step <= stepCount) {
        prevBtn.classList.remove("d-none");
        prevBtn.classList.add("d-inline-block");
        step[current_step].classList.remove("d-none");
        step[current_step].classList.add("d-block");
        step[previous_step].classList.remove("d-block");
        step[previous_step].classList.add("d-none");
        if (current_step == stepCount) {
            submitBtn.classList.remove("d-none");
            submitBtn.classList.add("d-inline-block");
            nextBtn.classList.remove("d-inline-block");
            nextBtn.classList.add("d-none");
        }
    } else {
        // Submit the form
        // if (current_step > stepCount) {
        //     form.onsubmit = () => {
        //         return true
        //     }
        // }
    }
    checkNextButton();
    activeDot(current_step);
});

// Click prev btn
prevBtn.addEventListener("click", () => {
    if (current_step > 0) {
        current_step--;
        let previous_step = current_step + 1;
        prevBtn.classList.add("d-none");
        prevBtn.classList.add("d-inline-block");
        step[current_step].classList.remove("d-none");
        step[current_step].classList.add("d-block");
        step[previous_step].classList.remove("d-block");
        step[previous_step].classList.add("d-none");
        if (current_step < stepCount) {
            submitBtn.classList.remove("d-inline-block");
            submitBtn.classList.add("d-none");
            nextBtn.classList.remove("d-none");
            nextBtn.classList.add("d-inline-block");
            prevBtn.classList.remove("d-none");
            prevBtn.classList.add("d-inline-block");
        }
    }

    if (current_step == 0) {
        prevBtn.classList.remove("d-inline-block");
        prevBtn.classList.add("d-none");
    }
    checkNextButton();
    activeDot(current_step);
});



// =============== FANKI's ===================
// display remarks when Yes CHECKED

//s2q1
$("#s2q1_yes").change(function() {
    if (this.checked) {
        //I am checked
        $(".s2q1 .hide_other").css({ display: "block" });
    } else {
        return;
    }
});

$("#s2q1_no").change(function() {
    if (this.checked) {
        //I am checked
        $(".s2q1 .hide_other").css({ display: "none" });
    } else {
        return;
    }
});

//s2q2
$("#s2q2_yes").change(function() {
    if (this.checked) {
        //I am checked
        $(".s2q2 .hide_other").css({ display: "block" });
    } else {
        return;
    }
});

$("#s2q2_no").change(function() {
    if (this.checked) {
        //I am checked
        $(".s2q2 .hide_other").css({ display: "none" });
    } else {
        return;
    }
});

//s2q3
$("#s2q3_yes").change(function() {
    if (this.checked) {
        //I am checked
        $(".s2q3 .hide_other").css({ display: "block" });
    } else {
        return;
    }
});

$("#s2q3_no").change(function() {
    if (this.checked) {
        //I am checked
        $(".s2q3 .hide_other").css({ display: "none" });
    } else {
        return;
    }
});

//s2q4
$("#s2q4_yes").change(function() {
    if (this.checked) {
        //I am checked
        $(".s2q4 .hide_other").css({ display: "block" });
    } else {
        return;
    }
});

$("#s2q4_no").change(function() {
    if (this.checked) {
        //I am checked
        $(".s2q4 .hide_other").css({ display: "none" });
    } else {
        return;
    }
});

const checkInput = (question) => {
    let serializeArray = $("#farm-log").serializeArray();
    let answer = serializeArray.find((a) => a.name == question)
    console.log(answer)
    return (answer != undefined && answer.value != '' && answer.value != 'Please select')
}

//s2 check now

$('#savebtn-s2').click(() => {
    if (!checkInput('s2q1') && !checkInput('s2q2') && !checkInput('s2q3') && !checkInput('s2q4')) {
        showCheckNow(0)
    } else if ((checkInput('s2q1') && checkInput('s2q2') && checkInput('s2q3') && checkInput('s2q4'))) {
        showCompleted(0)
    } else {
        showPartlyComplete(0)
    }
});

//s2 check now
$('#savebtn-s2').click(() => {
    if (!checkInput('s2q1') && !checkInput('s2q2') && !checkInput('s2q3') && !checkInput('s2q4')) {
        showCheckNow(0)
    } else if ((checkInput('s2q1') && checkInput('s2q2') && checkInput('s2q3') && checkInput('s2q4'))) {
        showCompleted(0)
    } else {
        showPartlyComplete(0)
    }
});

//s2 check now
$('#savebtn-s2').click(() => {
    if (!checkInput('s2q1') && !checkInput('s2q2') && !checkInput('s2q3') && !checkInput('s2q4')) {
        showCheckNow(0)
    } else if ((checkInput('s2q1') && checkInput('s2q2') && checkInput('s2q3') && checkInput('s2q4'))) {
        showCompleted(0)
    } else {
        showPartlyComplete(0)
    }
});

//s3 check now
$('#savebtn-s3').click(() => {
    if (!checkInput('s3q1') && !checkInput('s3q3')) {
        showCheckNow(1)
    } else if (checkInput('s3q1') && checkInput('s3q3')) {
        showCompleted(1)
    } else {
        showPartlyComplete(1)
    }
});

//s4q1
$("#s4q1_yes").change(function() {
    if (this.checked) {
        //I am checked
        $(".s4q1 .hide_other").css({ display: "block" });
    } else {
        return;
    }
});

$("#s4q1_no").change(function() {
    if (this.checked) {
        //I am checked
        $(".s4q1 .hide_other").css({ display: "none" });
    } else {
        return;
    }
});

//s4 check now
$('#savebtn-s4').click(() => {
    if (!checkInput('s4q1') && !checkInput('s4q2') && !checkInput('s4q3')) {
        showCheckNow(2)
    } else if (checkInput('s4q1') && checkInput('s4q2') && checkInput('s4q3')) {
        showCompleted(2)
    } else {
        showPartlyComplete(2)
    }
});

//s5 add harvest button
$('#add_harvest_btn').click(() => {
    $('.s5-adding').clone().appendTo($('#s5-adding-container'))
    if ($('.s5-adding').length > 1) {
        $('.s5-adding')[1].classList.add("s5-adding-clone");
        $('.s5-adding')[1].classList.remove("s5-adding");
    }
})

//s5 check now
$('#savebtn-s5').click(() => {
    if (!checkInput('s5q1') && !checkInput('s5q2') && !checkInput('s5q3')) {
        showCheckNow(3)
    } else if (checkInput('s5q1') && checkInput('s5q2') && checkInput('s5q3')) {
        showCompleted(3)
    } else {
        showPartlyComplete(3)
    }
});

//s6q1
$("#s6q1_yes").change(function() {
    if (this.checked) {
        //I am checked
        $(".s6q1 .hide_other").css({ display: "block" });
    } else {
        return;
    }
});

$("#s6q1_no").change(function() {
    if (this.checked) {
        //I am checked
        $(".s6q1 .hide_other").css({ display: "none" });
    } else {
        return;
    }
});

//s6q2
$('#s6q2-minus').click(() => {
    let current = parseInt($('#s6q2_num').html());
    if (current > 0) {
        $('#s6q2_num').html(current - 1)
    }
})

$('#s6q2-add').click(() => {
    let current = parseInt($('#s6q2_num').html());
    $('#s6q2_num').html(current + 1)
})

//s6q3
$("#s6q3_yes").change(function() {
    if (this.checked) {
        //I am checked
        $(".s6q3 .hide_other").css({ display: "block" });
    } else {
        return;
    }
});

$("#s6q3_no").change(function() {
    if (this.checked) {
        //I am checked
        $(".s6q3 .hide_other").css({ display: "none" });
    } else {
        return;
    }
});

//s6q4
$("#s6q4_yes").change(function() {
    if (this.checked) {
        //I am checked
        $(".s6q4 .hide_other").css({ display: "block" });
    } else {
        return;
    }
});

$("#s6q4_no").change(function() {
    if (this.checked) {
        //I am checked
        $(".s6q4 .hide_other").css({ display: "none" });
    } else {
        return;
    }
});

//s6 check now
$('#savebtn-s6').click(() => {
    if (!checkInput('s6q1') && !checkInput('s6q3') && !checkInput('s6q4')) {
        showCheckNow(4)
    } else if (checkInput('s6q1') && checkInput('s6q3') && checkInput('s6q4')) {
        showCompleted(4)
    } else {
        showPartlyComplete(4)
    }
});