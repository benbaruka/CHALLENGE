document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            const img = item.querySelector("img");
            const overlay = item.querySelector(".overlay");
            const textOverlay = item.querySelector(".text-overlay");

            img.style.filter = "grayscale(100%)";
            img.style.transform = "scale(1.1)";
            overlay.style.opacity = "1";
            textOverlay.style.opacity = "1";
        });

        item.addEventListener("mouseleave", () => {
            const img = item.querySelector("img");
            const overlay = item.querySelector(".overlay");
            const textOverlay = item.querySelector(".text-overlay");

            img.style.filter = "none";
            img.style.transform = "scale(1)";
            overlay.style.opacity = "0";
            textOverlay.style.opacity = "0";
        });
    });
});