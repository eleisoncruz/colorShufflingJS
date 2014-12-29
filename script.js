// Initializing colors and creating random colors selection.
function shuffleColors() {
  var colors = ["red", "green", "blue", "yellow", "teal"];
  var randomColor = Math.floor(Math.random() * colors.length);
  // Created a simple loop for crawling the colors() array
  for (var i = 0; i < colors.length; i++) {
    // Below is a little tricky, making the colors unique with each other.
    randomColor = (randomColor + 1) % colors.length;
    // Initializing new elements for each colors.
    var newClass = document.createElement("div");
    newClass.setAttribute("class", "blocks");
    document.getElementById("stageArea").appendChild(newClass).style.background = colors[randomColor];
    // Labeling the blocks with it's corresponding index number of the colors() array.
    newClass.innerHTML = randomColor;
  }
}

// Creating the input button and setting attributes
window.onload = function() {
  // Initializing the button
  shuffleColors();
  var newButton = document.createElement("input");
  newButton.setAttribute("type", "button");
  newButton.setAttribute("value", "Change Colors");
  document.getElementById("stageArea").appendChild(newButton);
  // Re-rumbling blocks
  newButton.onclick = function() {
    window.location.reload();
  }
}
