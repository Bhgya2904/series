// Closure-based counter factory function
const counterFactory = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const countersDiv = document.getElementById("counters");

// Create a new independent counter
function createNewCounter() {
  const counter = counterFactory(); // Each call returns a new independent counter

  const box = document.createElement("div");
  box.className = "counter-box";

  const display = document.createElement("span");
  display.textContent = "0";

  const button = document.createElement("button");
  button.textContent = "Increment";
  button.onclick = () => {
    display.textContent = counter(); // Call the closure to increment
  };

  box.appendChild(display);
  box.appendChild(button);
  countersDiv.appendChild(box);
}
