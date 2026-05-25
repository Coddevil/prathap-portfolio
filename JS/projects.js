/* =========================
   SEARCH SYSTEM
========================= */

const searchInput =
document.getElementById("projectSearch");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        const value =
        searchInput.value.toLowerCase();

        projectCards.forEach((card) => {

            const text =
            card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display = "block";
            }

            else{

                card.style.display = "none";
            }

        });

    });

}