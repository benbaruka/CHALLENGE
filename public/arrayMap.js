document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector(".grid-container");
    const template = document.querySelector(".grid-item.template");
    const imageData = [
        { src: "/assets/image11.jpg", lines: ["FENNEC", "FOX"], country: "India" },
        {
            src: "/assets/image12.jpg",
            lines: ["HUMPBACK", "WHALE"],
            country: "South Africa",
        },
        {
            src: "/assets/image13.jpg",
            lines: ["COMMON BROWN", "BABOON"],
            country: "South Africa",
        },
        {
            src: "/assets/image14.jpg",
            lines: ["SPOTTED", "DEER"],
            country: "Amazon",
        },
    ];

    imageData.forEach((data) => {
        const clone = template.cloneNode(true);
        clone.classList.remove("template");
        clone.querySelector("img").src = data.src;
        data.lines.forEach((line) => {
            const lineElement = document.createElement("p");
            lineElement.textContent = line;
            clone.querySelector(".text-overlay .text").appendChild(lineElement); // Correction ici
        });
        clone.querySelector(".country").textContent = data.country;

        clone.addEventListener("mouseenter", () => {
            const textSee = clone.querySelector(".text-see");
            textSee.style.opacity = "1";
        });

        clone.addEventListener("mouseleave", () => {
            const textSee = clone.querySelector(".text-see");
            textSee.style.opacity = "0";
        });

        gridContainer.appendChild(clone);
    });
    // Retire l'élément modèle du DOM
    template.remove();
});