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

// Contact Form Subject

function updateForm() {
    // Get the name input value
    const name = document.getElementById('name').value;

    // Update the _subject value dynamically
    document.getElementById('subject').value = `Thanks for reaching out, ${name}!`;
    document.getElementById('autoresponse').value = `Thanks for your message, ${name}. I'll be in touch! \n\nBest regards,\nYhung`; //not functional atm
}

// Executes function whenever user types in input
document.getElementById('name').addEventListener('input', updateForm)