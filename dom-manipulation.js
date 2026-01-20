// Change styles
let heading = document.getElementById("mainHeading");
heading.style.color = "blue";
heading.style.fontSize = "30px";
// Add new element
let newPara = document.createElement("p");
newPara.textContent = "This paragraph is added";
document.body.appendChild(newPara);
// Remove element after 3 seconds
setTimeout(() => {
    newPara.remove();
}, 3000);
// Add and remove CSS class
heading.classList.add("highlight");
heading.classList.remove("highlight");
// Change image source
let image = document.getElementById("myImage");
// Read input value and show in paragraph
let input = document.getElementById("nameInput");
let display = document.createElement("p");
document.body.appendChild(display);
input.addEventListener("keyup", () => {
    display.textContent = input.value;
});
// Create list from array
let fruits = ["Apple", "Banana", "Mango"];
let list = document.getElementById("list");
fruits.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
});