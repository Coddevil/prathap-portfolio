const searchInput =
document.getElementById("searchSkill");

const skillCards =
document.querySelectorAll(".skill-card");

searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    skillCards.forEach((card) => {

        const text =
        card.innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display = "flex";

        }

        else{

            card.style.display = "none";

        }

    });

});