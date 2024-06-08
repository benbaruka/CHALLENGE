# COA Taskforce Take Home Challenge

## Project Structure

This project is organized into the following directories and files:

```
project-root/
│
├── assets/
│   ├── image11.jpg
│   ├── image12.jpg
│   ├── image13.jpg
│   └── image14.jpg
│
├── public/
│   ├── index.html
│   ├── arrayMap.js
│   └── stringTransform.js
│
├── style/
│   └── index.css
│
└── README.md
```

### assets/

- **image11.jpg**
- **image12.jpg**
- **image13.jpg**
- **image14.jpg**

  These are the image files used in the grid. Each image is referenced in the `imageData` array in `arrayMap.js`.

### public/

- **index.html**: This is the main HTML file that sets up the structure of the grid layout and includes the modal for displaying images in full size. It links to the necessary CSS and JavaScript files.

  ```html
  <!DOCTYPE html>
  <html lang="en"></html>
  ```

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>COA TASKFORCE TAKE HOME CHALLENGE</title>
    <link href="../style/index.css" rel="stylesheet" />
</head>

<body>
    <div class="grid-container">
        <div class="grid-item template">
            <img src="" alt="Placeholder Image" class="img" />
            <div class="overlay"></div>
            <div class="text-overlay">
                <p class="text"></p>
                <p class="country"></p>
            </div>
            <div class="text-see">
                <p class="see_more">know more <span class="arrow">&rarr;</span></p>
            </div>
        </div>
    </div>
    <div id="modal" class="modal">
        <span class="close">&times;</span>
        <img id="fullsize-image" class="modal-content" src="" alt="Fullsize Image" />
    </div>
    <script src="./arrayMap.js"></script>
    <script src="./stringTransform.js"></script>
</body>

</html>
  ```

- **arrayMap.js**: This JavaScript file handles the dynamic generation of the grid items, including setting up event listeners for interactions such as opening and closing the modal and displaying additional text when the user hovers over an image.

  ```javascript
  document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.querySelector(".grid-container");
    const modal = document.getElementById("modal");
    const fullsizeImage = document.getElementById("fullsize-image");
    const closeButton = document.querySelector(".close");
    const template = document.querySelector(".grid-item.template");
    const imageData = [
      {
        src: "/assets/image11.jpg",
        lines: ["fennec", "fox"],
        country: "India",
      },
      {
        src: "/assets/image12.jpg",
        lines: ["humpback", "whale"],
        country: "South Africa",
      },
      {
        src: "/assets/image13.jpg",
        lines: ["common brown", "baboon"],
        country: "South Africa",
      },
      {
        src: "/assets/image14.jpg",
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
  ```

- **stringTransform.js**: This JavaScript file contains utility functions for string transformations. Currently, it includes a function to convert strings to uppercase, which is used in `arrayMap.js`.

  ```javascript
  // Utility functions for string transformations

  // Example function to convert a string to uppercase
  function toUpperCaseTextOverLey(text) {
    return text.toUpperCase();
  }

  // Export the function for use in other modules
  export { toUpperCaseTextOverLey };
  ```

### style/

- **index.css**: This CSS file contains the styles for the grid layout, the modal, and other visual elements. It ensures that the grid items are displayed correctly, handles hover effects, and styles the modal for displaying full-size images.

  ```css
  body,
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    font-family: "din-condensed-variable", sans-serif;
    font-variation-settings: "wght" 400;
  }
  ```

.grid-container {
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 100%;
height: 100%;
}

.grid-item {
position: relative;
width: 100%;
height: 100%;
overflow: hidden;
}

.grid-item img {
width: 100%;
height: 100%;
object-fit: cover;
transition: transform 0.3s ease, filter 0.3s ease;
}
.grid-item .overlay {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.4);
}
.grid-item .text-overlay {
position: absolute;
bottom: 10%;
left: 10%;
width: 100%;
height: 100px;
gap: 4px;
opacity: 0px;
transition: opacity 300ms ease;
}
.grid-item .text-overlay .text {
color: #ffffff;
font-size: 38px;
font-weight: 700;
margin: 0;
padding: 0;
}
.grid-item .text-overlay .text p {
margin: 4px 0;
}
.grid-item .text-overlay .country {
color: #ffffff;
font-size: 14px;
font-weight: 400;
margin: 8px, 0;
padding: 0;
}
.grid-item .text-see {
position: absolute;
bottom: 4%;
left: 10%;
color: white;
font-size: 18px;
border-radius: 3px;
opacity: 0;
transition: opacity 300ms ease;
color: #7cedff;
font-weight: 700;
}
.grid-item:hover img {
transform: scale(1.1);
filter: grayscale(100%) blur(7px);
}

.grid-item:hover .overlay {
opacity: 1;
}

.grid-item:hover .text-overlay {
opacity: 1;
bottom: 14%;
}
.grid-item:hover .text-see {
opacity: 1;
}

.grid-item:hover .text-see {
opacity: 1;
}
.grid-item .text-see .arrow {
display: inline-block;
transition: transform 100ms ease;
font-size: 30px;
}
@media (max-width: 768px) {
.grid-item .text-overlay,
.grid-item .text-see {
display: none;
}
}
.modal {
display: none;
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgb(0, 0, 0);
background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
margin: auto;
display: block;
width: 80%;
max-width: 800px;
max-height: 80%;
}

.close {
position: absolute;
top: 15px;
right: 35px;
color: white;
font-size: 40px;
font-weight: bold;
cursor: pointer;
}

```

## Summary

This project creates an interactive grid of images that, when clicked, open in a full-size modal. The grid items display additional text on hover, and the text lines are converted to uppercase using a utility function. The structure and style of the project are handled through index.html and index.css, while the functionality is managed by arrayMap.js and stringTransform.js. The assets folder contains the images used in the project. To run the project, open index.html in your browser using the "Open with Live Server" option for best results.
```
