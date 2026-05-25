const roles = [
    "Full Stack Web Developer",
    "AI & Data Science Student",
    "Problem Solver",
    "Frontend Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing-text");

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    }

    else{

        setTimeout(eraseEffect, 2000);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingElement.textContent =
        roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    }

    else{

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        setTimeout(typeEffect, 500);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    typingElement.textContent = "";

    typeEffect();

});
const counters =
document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target =
        +counter.getAttribute('data-target');

        const current =
        +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        }

        else{

            counter.innerText = target;

        }

    };

    updateCounter();

});
const scrollBtn =
document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.style.display = "block";

    }

    else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const hiddenElements =
document.querySelectorAll(".fade-up");

const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});
const greeting =
document.getElementById("greeting");

const hour =
new Date().getHours();

if(hour < 12){

    greeting.textContent =
    "Good Morning, Welcome to My Portfolio";

}

else if(hour < 18){

    greeting.textContent =
    "Good Afternoon, Welcome to My Portfolio";

}

else{

    greeting.textContent =
    "Good Evening, Welcome to My Portfolio";

}
