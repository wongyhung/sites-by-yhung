const dropdownMenuButton = document.querySelector("#dropdownMenuButton");
const dropdownMenuContainer = document.querySelector("#dropdownMenuContainer");

let isClicked = false;

// Toggles the dropdown when button is clicked
dropdownMenuButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent this click from triggering the document click listener
    isClicked = !isClicked;
    dropdownMenuContainer.classList.toggle("visible", isClicked);
});

// Hides dropdown if user clicks outside
document.addEventListener("click", (event) => {
    if (!dropdownMenuButton.contains(event.target) && !dropdownMenuContainer.contains(event.target)) {
        isClicked = false;
        dropdownMenuContainer.classList.remove("visible");
    }
});

// Hides dropdown on scroll
window.addEventListener("scroll", () => {
    if (isClicked) {
        isClicked = false;
        dropdownMenuContainer.classList.remove("visible");
    }
});