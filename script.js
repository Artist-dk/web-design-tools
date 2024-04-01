function handleResize() {

  var height = window.innerHeight ||
               document.documentElement.clientHeight ||
               document.body.clientHeight;
               
  document.getElementById("innerWidth").value = window.innerWidth;
  document.getElementById("clientWidth").value = document.documentElement.clientWidth;
  document.getElementById("bodyClientWidth").value = document.body.clientWidth;

  document.getElementById("innerHeight").value = window.innerHeight;
  document.getElementById("clientHeight").value = document.documentElement.clientHeight;
  document.getElementById("bodyClientHeight").value = document.body.clientHeight;

  var a = window.cursor
}

window.addEventListener("resize", handleResize);

handleResize();


// Function to update cursor position
function updateCursorPosition(event) {
  document.getElementById("clientX").value = event.clientX;
  document.getElementById("clientY").value = event.clientY;
}
// Attach event listener to update cursor position on mouse move
document.addEventListener('mousemove', updateCursorPosition);