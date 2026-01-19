// ===== DOM BASICS =====
// Access elements using different methods
let heading = document.getElementById("mainHeading");
let paragraph = document.getElementsByClassName("text");
let buttons = document.getElementsByTagName("button");
let input = document.querySelector("#nameInput");
let allParagraphs = document.querySelectorAll("p");
// Print elements in console
console.log(heading);
console.log(paragraph);
console.log(buttons);
console.log(input);
console.log(allParagraphs);

// Change text content of heading
heading.textContent = "DOM Basics Changed";

// Change HTML content of paragraph
paragraph[0].innerHTML = "<b>Paragraph changed using JavaScript</b>";