document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            const textSee = item.querySelector(".text-see");
            textSee.style.opacity = "1";
        });

        item.addEventListener("mouseleave", () => {
            const textSee = item.querySelector(".text-see");
            textSee.style.opacity = "0";
        });
    });
});