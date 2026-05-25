/* =========================
   TIMELINE SCROLL ANIMATION
========================= */

const timelineItems =
document.querySelectorAll(".timeline-item");

const revealTimeline = () => {

    const triggerBottom =
    window.innerHeight * 0.85;

    timelineItems.forEach(item => {

        const itemTop =
        item.getBoundingClientRect().top;

        if(itemTop < triggerBottom){

            item.style.opacity = "1";

            item.style.transform =
            "translateY(0)";
        }
    });
};

/* INITIAL */

revealTimeline();

/* ON SCROLL */

window.addEventListener(
    "scroll",
    revealTimeline
);

/* =========================
   ACHIEVEMENT CARD HOVER GLOW
========================= */

const achievementCards =
document.querySelectorAll(".achievement-card");

achievementCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            card.style.background =
            `
            radial-gradient(
            circle at ${x}px ${y}px,
            rgba(34,211,238,0.12),
            rgba(255,255,255,0.03)
            )
            `;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background =
            "rgba(255,255,255,0.03)";
        }
    );
});

/* =========================
   TIMELINE CARD HOVER EFFECT
========================= */

const timelineCards =
document.querySelectorAll(".timeline-card");

timelineCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
            "translateY(-10px) scale(1.02)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            "translateY(0) scale(1)";
        }
    );
});