document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector(".grid-container");

    const imageData = [
        { src: "/assets/image11.jpg", text: "FENNEC FOX", country: "India" },
        {
            src: "/assets/image12.jpg",
            text: "HUMPBACK WHALE",
            country: "South Africa",
        },
        {
            src: "/assets/image13.jpg",
            text: "COMMON BROWN BABOON",
            country: "South Africa",
        },
        { src: "/assets/image14.jpg", text: "SPOTTED DEER", country: "Amazon" },
    ];

    imageData.forEach((data) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        const img = document.createElement("img");
        img.src = data.src;
        img.alt = `Placeholder Image`;
        img.classList.add("img");

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const textOverlay = document.createElement("div");
        textOverlay.classList.add("text-overlay");

        const text = document.createElement("p");
        text.classList.add("text");
        text.innerHTML = toUpperCaseText(data.text); // Transforme le texte en majuscules

        const country = document.createElement("p");
        country.classList.add("country");
        country.textContent = data.country;

        const textSee = document.createElement("div");
        textSee.classList.add("text-see");

        const seeMore = document.createElement("p");
        seeMore.classList.add("see_more");
        seeMore.innerHTML = `know more <span class="arrow">&rarr;</span>`;

        textOverlay.appendChild(text);
        textOverlay.appendChild(country);
        textSee.appendChild(seeMore);
        gridItem.appendChild(img);
        gridItem.appendChild(overlay);
        gridItem.appendChild(textOverlay);
        gridItem.appendChild(textSee);
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener("mouseenter", () => {
            textSee.style.opacity = "1";
        });

        gridItem.addEventListener("mouseleave", () => {
            textSee.style.opacity = "0";
        });
    });
});