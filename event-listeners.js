// Click event//
let button = document.getElementById("btn");
button.addEventListener("click", () => {
    alert("Button Clicked!");
});
// Mouse enter and leave
let box = document.getElementById("box");
box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "green";
});
box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "lightblue";
});
// Counter
let count = 0;
let incBtn = document.createElement("button");
incBtn.textContent = "Increment";
let decBtn = document.createElement("button");
decBtn.textContent = "Decrement";
let counterText = document.createElement("p");
counterText.textContent = count;
document.body.append(incBtn, decBtn, counterText);
incBtn.addEventListener("click", () => {
    count++;
    counterText.textContent = count;
});
decBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counterText.textContent = count;
    }
});

// Prevent form submit
let form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = form.username.value;
    console.log("Form submitted by:", username);
});
