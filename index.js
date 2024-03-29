let hamburger = document.getElementById("hamburger");
let menuContent = document.getElementById("menuContent");

// Add event listener to the hamburger icon
hamburger.addEventListener("click", function() {
  // Toggle the display of the menu content
  if (menuContent.style.display === "none") {
    menuContent.style.display = "none";
  } else {
    menuContent.style.display = "flex";
    menuContent.style.flexDirection = 'column'
  }
  hamburger.style.display = 'none';
});

// Close the menu if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches("#hamburger")) {
    menuContent.style.display = "none";
    hamburger.style.display = 'block';
  }

});

let darkModeToggle = document.getElementById("darkModeToggle");

// Add event listener to the toggle button
darkModeToggle.addEventListener("click", function() {
  // Toggle the dark mode class on the body element
  document.body.classList.toggle("dark-mode");


  let darkModeActive = document.body.classList.contains("dark-mode");
  darkModeToggle.innerText = 'light mode';
  if (darkModeActive) {
    darkModeToggle.textContent = "Light Mode";
  } else {
    darkModeToggle.textContent = "Dark Mode";
  }

});
