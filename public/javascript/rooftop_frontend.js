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
$("#s2q1_yes").change(function () {
  if (this.checked) {
    //I am checked
    $(".s2q1 .hide_other").css({ display: "block" });
  } else {
    return;
  }
});

$("#s2q1_no").change(function () {
  if (this.checked) {
    //I am checked
    $(".s2q1 .hide_other").css({ display: "none" });
  } else {
    return;
  }
});

//s2q2
$("#s2q2_yes").change(function () {
  if (this.checked) {
    //I am checked
    $(".s2q2 .hide_other").css({ display: "block" });
  } else {
    return;
  }
});

$("#s2q2_no").change(function () {
  if (this.checked) {
    //I am checked
    $(".s2q2 .hide_other").css({ display: "none" });
  } else {
    return;
  }
});

//s2q3
$("#s2q3_yes").change(function () {
  if (this.checked) {
    //I am checked
    $(".s2q3 .hide_other").css({ display: "block" });
  } else {
    return;
  }
});

$("#s2q3_no").change(function () {
  if (this.checked) {
    //I am checked
    $(".s2q3 .hide_other").css({ display: "none" });
  } else {
    return;
  }
});

//s2q4
$("#s2q4_yes").change(function () {
  if (this.checked) {
    //I am checked
    $(".s2q4 .hide_other").css({ display: "block" });
  } else {
    return;
  }
});

$("#s2q4_no").change(function () {
  if (this.checked) {
    //I am checked
    $(".s2q4 .hide_other").css({ display: "none" });
  } else {
    return;
  }
});

//s4q1
$("#s4q1_yes").change(function () {
  if (this.checked) {
    //I am checked
    $(".s4q1 .hide_other").css({ display: "block" });
  } else {
    return;
  }
});

$("#s4q1_no").change(function () {
  if (this.checked) {
    //I am checked
    $(".s4q1 .hide_other").css({ display: "none" });
  } else {
    return;
  }
});

//s6q1
$("#s6q1_yes").change(function () {
  if (this.checked) {
    //I am checked
    $(".s6q1 .hide_other").css({ display: "block" });
  } else {
    return;
  }
});

$("#s6q1_no").change(function () {
  if (this.checked) {
    //I am checked
    $(".s6q1 .hide_other").css({ display: "none" });
  } else {
    return;
  }
});

//s6q3
$("#s6q3_yes").change(function () {
  if (this.checked) {
    //I am checked
    $(".s6q3 .hide_other").css({ display: "block" });
  } else {
    return;
  }
});

$("#s6q3_no").change(function () {
  if (this.checked) {
    //I am checked
    $(".s6q3 .hide_other").css({ display: "none" });
  } else {
    return;
  }
});

//s6q4
$("#s6q4_yes").change(function () {
  if (this.checked) {
    //I am checked
    $(".s6q4 .hide_other").css({ display: "block" });
  } else {
    return;
  }
});

$("#s6q4_no").change(function () {
  if (this.checked) {
    //I am checked
    $(".s6q4 .hide_other").css({ display: "none" });
  } else {
    return;
  }
});
