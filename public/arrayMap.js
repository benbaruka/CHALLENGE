document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector(".grid-container");
    const modal = document.getElementById("modal");
    const fullsizeImage = document.getElementById("fullsize-image");
    const closeButton = document.querySelector(".close");
    const template = document.querySelector(".grid-item.template");
    const imageData = [
        { src: "/assets/imaage14.jpeg", lines: ["fennec", "fox"], country: "India" },
        {
            src: "/assets/imaage11.jpeg",
            lines: ["humpback", "whale"],
            country: "South Africa",
        },
        {
            src: "/assets/imaage13.jpeg",
            lines: ["common brown", "baboon"],
            country: "South Africa",
        },
        {
            src: "/assets/imaage12.jpeg",
            lines: ["spotted", "deer"],
            country: "Amazon",
        },
    ];

    function openModal(src) {
        fullsizeImage.src = src;
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    imageData.forEach((data) => {
        const clone = template.cloneNode(true);
        clone.classList.remove("template");
        clone.querySelector("img").src = data.src;

        data.lines.forEach((line) => {
            const lineElement = document.createElement("p");
            lineElement.textContent = toUpperCaseTextOverLey(line);
            clone.querySelector(".text-overlay .text").appendChild(lineElement);
        });
        clone.querySelector(".country").textContent = data.country;

        clone.addEventListener("click", () => {
            openModal(data.src);
        });

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

    closeButton.addEventListener("click", closeModal);
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    template.remove();
});