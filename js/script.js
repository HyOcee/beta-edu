let typeWriter = document.getElementById('typeWriter');
let txt = 'Make your trip an unforgettable moment together.'; /* The text */
let typeIndex = 0;
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriterFunction() {
  if (typeIndex < txt.length) {
    typeWriter.innerHTML += txt.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeWriterFunction, speed);
  }
}

typeWriterFunction();