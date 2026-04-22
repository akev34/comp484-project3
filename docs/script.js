// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Update the h1 text dynamically when the page loads.
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Add a custom data-action attribute to the toggle anchor tag.
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Select all list items, loop through them, and set their color to blue.
function highlightListItems() {
  const listItems = document.querySelectorAll("#item-list li");
  listItems.forEach(function (item) {
    item.style.color = "blue";
  });
}
highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---

// Task 8 helper: create a timestamp span and append it to the status div.
function createTimestamp() {
  const span = document.createElement("span");
  span.innerHTML = " " + new Date().toLocaleTimeString();
  statusOutput.appendChild(span);
}

// Task 5: toggleStatus shows/hides the status div on click.
function toggleStatus(e) {
  // Task 6: Prevent default anchor jump/reload behavior.
  e.preventDefault();

  // Task 5: Toggle the .hidden class on the status output div.
  statusOutput.classList.toggle("hidden");

  // Task 7: If the status div is now visible, highlight the title;
  // otherwise reset the background color.
  if (!statusOutput.classList.contains("hidden")) {
    mainTitle.style.backgroundColor = "yellow";
    // Task 8: Append a new timestamp each time the status becomes visible.
    createTimestamp();
  } else {
    mainTitle.style.backgroundColor = "";
  }
}

// Task 5: Attach the click listener to the toggle button.
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---

// Task 10: Start flashing the control panel every 500ms using setInterval.
function startFlashing() {
  // Guard against stacking multiple intervals on repeated clicks.
  if (intervalId !== null) return;
  intervalId = setInterval(function () {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

// Task 10: Stop the flashing animation using clearInterval.
function stopFlashing() {
  clearInterval(intervalId);
  intervalId = null;
  // Make sure the control panel ends up visible after stopping.
  controlPanel.classList.remove("hidden");
}

// Task 10: Bind click to start, and dblclick to stop.
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
