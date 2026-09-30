/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>rayden's super cool awesome cmpm 121 project</h1>
  <p>meows: <span id="counter">0</span></p>
  <button id="increment">click me 4 meows!</button>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

function updateCounter() {
  counterElement.textContent = counter.toString();
}

button.addEventListener("click", () => {
  counter++;
  console.log("I have these meows:", button, counterElement, counter);
  updateCounter();
});
