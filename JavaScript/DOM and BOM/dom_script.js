// Example 1
document.getElementById("changeTextButton").addEventListener("click", function () {
    let para = document.getElementById("myParagraph");
    para.textContent = "This paragraph is changed";
});

// Example 2 
document.getElementById("highlightFirstCity").addEventListener("click", function () {
    let citieslist = document.getElementById("citiesList");
    citieslist.children[1].classList.add("highlight1");
});

// Example 3
document.getElementById("changeOrder").addEventListener("click", function () {
    let coffee = document.getElementById("coffeeType");
    coffee.textContent = "Espresso";
    coffee.style.fontWeight = "bold"
    coffee.style.color = "orange"
});

// Example 4 
document.getElementById("addNewItem").addEventListener("click", function () {
    let newItem = document.createElement('li');
    newItem.textContent = "Egg";
    document.getElementById("shoppingList").appendChild(newItem);
});

// Example 5
document.getElementById("removeLastTask").addEventListener("click", function () {
    let child = document.getElementById("taskList");
    child.lastElementChild.remove();
});

// Example 6 
document.getElementById("clickMeButton").addEventListener("click", function () {
    alert("Don't click me...");
});


// Example 7 
document.getElementById("teaList").addEventListener("click", function (event) {
    alert("Your selected : " + event.target.textContent);
});

// Example 8 
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent = `Feedback is ${feedback}`;
});

// Example 9
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// Example 10 
document.getElementById("toggleHighlight").addEventListener("click", function () {
    let toggleHi = document.getElementById("descriptionText");
    toggleHi.classList.toggle("highlight1"); // highlight from css
});