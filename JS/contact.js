/* =========================
   CONTACT FORM VALIDATION
========================= */

const contactForm =
document.querySelector(".contact-form");

const nameInput =
contactForm.querySelector(
'input[type="text"]'
);

const emailInput =
contactForm.querySelector(
'input[type="email"]'
);

const subjectInput =
contactForm.querySelectorAll(
'input[type="text"]'
)[1];

const messageInput =
contactForm.querySelector(
"textarea"
);

/* =========================
   EMAIL VALIDATION
========================= */

function isValidEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(email);
}

/* =========================
   SHOW ERROR
========================= */

function showError(input, message){

    input.style.borderColor =
    "#ef4444";

    input.style.boxShadow =
    "0 0 18px rgba(239,68,68,0.25)";

    input.placeholder = message;
}

/* =========================
   RESET FIELD
========================= */

function resetField(input){

    input.style.borderColor =
    "rgba(255,255,255,0.08)";

    input.style.boxShadow =
    "none";
}

/* =========================
   FORM SUBMIT
========================= */

contactForm.addEventListener(
"submit",
function(e){

    e.preventDefault();

    let isValid = true;

    /* RESET */

    resetField(nameInput);
    resetField(emailInput);
    resetField(subjectInput);
    resetField(messageInput);

    /* NAME */

    if(nameInput.value.trim() === ""){

        showError(
            nameInput,
            "Enter your name"
        );

        isValid = false;
    }

    /* EMAIL */

    if(
        emailInput.value.trim() === ""
    ){

        showError(
            emailInput,
            "Enter your email"
        );

        isValid = false;
    }

    else if(
        !isValidEmail(
            emailInput.value.trim()
        )
    ){

        showError(
            emailInput,
            "Invalid email"
        );

        isValid = false;
    }

    /* SUBJECT */

    if(
        subjectInput.value.trim() === ""
    ){

        showError(
            subjectInput,
            "Enter subject"
        );

        isValid = false;
    }

    /* MESSAGE */

    if(
        messageInput.value.trim() === ""
    ){

        showError(
            messageInput,
            "Enter message"
        );

        isValid = false;
    }

    /* SUCCESS */

    if(isValid){

        alert(
            "Message sent successfully!"
        );

        contactForm.reset();
    }
});

/* =========================
   INPUT LIVE RESET
========================= */

const allInputs =
document.querySelectorAll(
"input, textarea"
);

allInputs.forEach((input)=>{

    input.addEventListener(
    "input",
    ()=>{

        resetField(input);

    });

});