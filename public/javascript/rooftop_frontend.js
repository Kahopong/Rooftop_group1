let step = document.getElementsByClassName('step');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');
let bodyElement = document.querySelector('body');

//Success Msg
let succcessDiv = document.getElementById('success');

// Define steps, prev, next, submit btn
//Change stepCount according to pages of form!!
let current_step = 0;
let stepCount = 6
step[current_step].classList.add('d-block');
if (current_step == 0) {
    prevBtn.classList.add('d-none');
    submitBtn.classList.add('d-none');
    nextBtn.classList.add('d-inline-block');
}

$('#farm-log').submit((e) => {
    e.preventDefault();
    console.log('submit!')
    let serializeArray = $("#farm-log").serializeArray();
    console.log(serializeArray)
})


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
        $('#q-box__buttons').addClass('d-flex justify-content-end')
    } else {
        $('#q-box__buttons').removeClass('d-flex justify-content-end')
    }
}



// Click next btn
nextBtn.addEventListener('click', () => {
    current_step++;
    let previous_step = current_step - 1;
    checkNextButton()
    if ((current_step > 0) && (current_step <= stepCount)) {
        prevBtn.classList.remove('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step == stepCount) {
            submitBtn.classList.remove('d-none');
            submitBtn.classList.add('d-inline-block');
            nextBtn.classList.remove('d-inline-block');
            nextBtn.classList.add('d-none');
        }
    } else {
        // Submit the form
        // if (current_step > stepCount) {
        //     form.onsubmit = () => {
        //         return true
        //     }
        // }

    }
    activeDot(current_step);
});

// Click prev btn
prevBtn.addEventListener('click', () => {
    checkNextButton()
    if (current_step > 0) {
        current_step--;
        let previous_step = current_step + 1;
        prevBtn.classList.add('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block')
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step < stepCount) {
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            nextBtn.classList.remove('d-none');
            nextBtn.classList.add('d-inline-block');
            prevBtn.classList.remove('d-none');
            prevBtn.classList.add('d-inline-block');
        }
    }

    if (current_step == 0) {
        prevBtn.classList.remove('d-inline-block');
        prevBtn.classList.add('d-none');
    }
    activeDot(current_step);
});