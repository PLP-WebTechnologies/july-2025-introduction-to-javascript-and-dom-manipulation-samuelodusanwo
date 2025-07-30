// =========================================================
// PART 1: Mastering JavaScript Basics
// Variables, Data Types, Operators, Conditionals, console.log()
// =========================================================

console.log("--- Part 1: JavaScript Basics ---");

// 1. Declare variables with different data types
let userName = "Alice"; // String
let userAge = 30;       // Number
let isStudent = true;   // Boolean
let favoriteColors = ["red", "blue", "green"]; // Array (Object type)
let userProfile = {     // Object
    name: "Alice",
    age: 30,
    city: "New York"
};
let undefinedVar; // Undefined (variable declared but not assigned)
let nullVar = null; // Null (intentional absence of any object value)

console.log(`Hello, ${userName}!`); // String concatenation using template literals
console.log(`Are you a student? ${isStudent}`);
console.log(`Your favorite colors are: ${favoriteColors.join(", ")}`);
console.log(`User profile city: ${userProfile.city}`);
console.log(`Type of undefinedVar: ${typeof undefinedVar}`);
console.log(`Type of nullVar: ${typeof nullVar}`); // Outputs "object" (a historical JS quirk)

// 2. Arithmetic Operations
let num1 = 10;
let num2 = 3;
console.log(`Addition: ${num1 + num2}`);      // 13
console.log(`Subtraction: ${num1 - num2}`);   // 7
console.log(`Multiplication: ${num1 * num2}`); // 30
console.log(`Division: ${num1 / num2}`);      // 3.333...
console.log(`Modulo (remainder): ${num1 % num2}`); // 1

// 3. Conditionals (if/else if/else)
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageInput = document.getElementById('ageInput');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', () => {
    let age = parseInt(ageInput.value); // Convert input string to number

    // Check if input is a valid number
    if (isNaN(age) || age < 0) {
        ageResult.textContent = "Please enter a valid positive age.";
        ageResult.style.color = "red";
    } else if (age >= 18) {
        ageResult.textContent = `You are ${age} years old. You are an adult!`;
        ageResult.style.color = "green";
    } else {
        ageResult.textContent = `You are ${age} years old. You are a minor.`;
        ageResult.style.color = "orange";
    }
});


// =========================================================
// PART 2: JavaScript Functions - The Heart of Reusability
// Custom functions, parameters, return values, common tasks
// =========================================================

console.log("\n--- Part 2: JavaScript Functions ---");

// Function 1: Calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    // Input validation (basic)
    if (typeof length !== 'number' || typeof width !== 'number' || length < 0 || width < 0) {
        console.error("calculateRectangleArea: Both length and width must be non-negative numbers.");
        return "Invalid input"; // Return an error message or null
    }
    return length * width;
}

// Get elements for area calculation
const lengthInput = document.getElementById('lengthInput');
const widthInput = document.getElementById('widthInput');
const calculateAreaBtn = document.getElementById('calculateAreaBtn');
const areaResult = document.getElementById('areaResult');

calculateAreaBtn.addEventListener('click', () => {
    const length = parseFloat(lengthInput.value); // Use parseFloat for decimals
    const width = parseFloat(widthInput.value);

    const area = calculateRectangleArea(length, width);

    if (typeof area === 'number') {
        areaResult.textContent = `The area is: ${area} cm²`;
        areaResult.style.color = "blue";
    } else {
        areaResult.textContent = area; // Display the error message
        areaResult.style.color = "red";
    }
});

// Function 2: Toggle content visibility (common task)
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        // Check if the element currently has the 'hidden' class
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden'); // Show the element
            console.log(`Element with ID '${elementId}' is now visible.`);
        } else {
            element.classList.add('hidden'); // Hide the element
            console.log(`Element with ID '${elementId}' is now hidden.`);
        }
    } else {
        console.warn(`Element with ID '${elementId}' not found for toggling.`);
    }
}

// Get element for toggle function
const toggleContentBtn = document.getElementById('toggleContentBtn');
toggleContentBtn.addEventListener('click', () => {
    toggleVisibility('secretMessage'); // Call the function with the ID of the element to toggle
});


// =========================================================
// PART 3: JavaScript Loops - Embrace the Power of Repetition!
// for, while, forEach loops
// =========================================================

console.log("\n--- Part 3: JavaScript Loops ---");

// Loop Example 1: Using for...of loop to iterate through an array and update DOM
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const fruitList = document.getElementById('fruitList');

// Clear existing list items (if any, before adding new ones)
fruitList.innerHTML = '';

for (const fruit of fruits) {
    const listItem = document.createElement('li'); // Create a new list item element
    listItem.textContent = fruit; // Set its text content
    fruitList.appendChild(listItem); // Add it to the ul element
    console.log(`Added fruit: ${fruit}`);
}

// Loop Example 2: Using a while loop for a countdown
const countdownDisplay = document.getElementById('countdownDisplay');
const startCountdownBtn = document.getElementById('startCountdownBtn');

startCountdownBtn.addEventListener('click', () => {
    let count = 5;
    countdownDisplay.textContent = ''; // Clear previous countdown
    startCountdownBtn.disabled = true; // Disable button during countdown

    const countdownInterval = setInterval(() => {
        if (count > 0) {
            countdownDisplay.textContent += `${count}... `;
            console.log(`Countdown: ${count}`);
            count--;
        } else {
            countdownDisplay.textContent += "Lift off!";
            console.log("Countdown: Lift off!");
            clearInterval(countdownInterval); // Stop the interval
            startCountdownBtn.disabled = false; // Re-enable button
        }
    }, 1000); // Update every 1 second (1000 milliseconds)
});


// =========================================================
// PART 4: Mastering the DOM with JavaScript
// Selecting elements, responding to events, dynamic updates, creating elements
// =========================================================

console.log("\n--- Part 4: Mastering the DOM ---");

// DOM Interaction 1: Change body background color on button click
const changeBgBtn = document.getElementById('changeBgBtn');
const resetBgBtn = document.getElementById('resetBgBtn');
const originalBgColor = document.body.style.backgroundColor; // Store original color

changeBgBtn.addEventListener('click', () => {
    // Generate a random light color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomColor;
    console.log(`Background changed to: ${randomColor}`);
});

resetBgBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = originalBgColor || '#eef4f7'; // Reset to original or default if unset
    console.log("Background reset.");
});

// DOM Interaction 2: Interactive Box - Change style on click and hover
const interactiveBox = document.getElementById('interactiveBox');

// Event Listener 1: Click event
interactiveBox.addEventListener('click', () => {
    // Toggle a class to change its style
    interactiveBox.classList.toggle('active');
    console.log("Interactive box clicked. Class toggled.");
});

// Event Listener 2: Mouseenter (hover in)
interactiveBox.addEventListener('mouseenter', () => {
    interactiveBox.style.transform = 'scale(1.1)'; // Slightly enlarge on hover
    interactiveBox.style.boxShadow = '0 0 15px rgba(0,0,0,0.3)';
    console.log("Mouse entered interactive box.");
});

// Event Listener 3: Mouseleave (hover out)
interactiveBox.addEventListener('mouseleave', () => {
    interactiveBox.style.transform = 'scale(1)'; // Reset size
    interactiveBox.style.boxShadow = 'none';
    console.log("Mouse left interactive box.");
});


// DOM Interaction 3: Add new list items dynamically
const newItemInput = document.getElementById('newItemInput');
const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');

addItemBtn.addEventListener('click', () => {
    const newItemText = newItemInput.value.trim(); // Get text and remove whitespace

    if (newItemText !== "") { // Check if input is not empty
        const newListItem = document.createElement('li'); // Create a new <li>
        newListItem.textContent = newItemText; // Set its content
        dynamicList.appendChild(newListItem); // Add the new <li> to the <ul>
        newItemInput.value = ""; // Clear the input field
        console.log(`Added new list item: "${newItemText}"`);
    } else {
        alert("Please enter some text to add to the list!");
        console.warn("Attempted to add empty list item.");
    }
});

// Optional: Allow adding with Enter key
newItemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItemBtn.click(); // Simulate a click on the add button
    }
});

console.log("\nJavaScript setup complete. Interact with the page!");