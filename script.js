console.log("Script Running");


const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;

// Query selectors for all buttons and scooters go here

const pepperoniBtn = document.querySelector("#pepperoni-button");
const veggieBtn = document.querySelector("#veggie-button");
const bbqBtn = document.querySelector("#bbq-button");

const pepperoniScooter = document.querySelector("#pepperoni-scooter");
const veggieScooter = document.querySelector("#veggie-scooter");
const bbqScooter  = document.querySelector("#bbq-scooter");

// Write the function that moves the pepperoni scooter forward
// Increase the pepperoni position
// Call the helper function to update the scooter position
// Call the winner check function

const boostPepperoni = (e) => {
    pepperoni_step += 1;
    shift(pepperoniScooter, pepperoni_step);
    winnerBox(pepperoni_step, "pepperoni");
};

// Write the function that moves the veggie scooter forward

const boostVeggie = (e) => {
    veggie_step += 1;
    shift(veggieScooter, veggie_step);
    winnerBox(veggie_step, "veggie");
};

// Write the function that moves the bbq scooter forward

const boostBbq = (e) => {
    bbq_step += 1;
    shift(bbqScooter, bbq_step);
    winnerBox(bbq_step, "bbq");
};

// Write a function that checks if a scooter reached column 7
// If so, display the winner message
// Disable all buttons when a winner is found

const disableAllBtns = () => {
    pepperoniBtn.disabled = true;
    veggieBtn.disabled = true;
    bbqBtn.disabled = true;
};

const winnerBox = (col, scooter) => {
    if (col === 7) {
        document.getElementById("winner").innerHTML = `<h2>The winner is ${scooter} scooter!</h2>`;
        disableAllBtns();
    }
}

// Add event listeners for each button
// Each button should trigger its own movement function
pepperoniBtn.addEventListener("click", boostPepperoni);
veggieBtn.addEventListener("click", boostVeggie);
bbqBtn.addEventListener("click", boostBbq);
