let typeWriter = document.getElementById('typeWriter');
let txt = 'You wanna become part of our writers team?'; /* The text */
let typeIndex = 0;
let speed = 350; /* The speed/duration of the effect in milliseconds */

function typeWriterFunction() {
  if (typeIndex < txt.length) {
    typeWriter.innerHTML += txt.charAt(typeIndex);
    typeIndex++;
  } else {
      typeIndex = 0;
      typeWriter.innerHTML = ''
  }
}

setInterval(typeWriterFunction, speed);

let x = document.getElementById("beta")
let text = " Library"
let i = 0

function myFunction(){
  if (i < text.length) {
    x.innerHTML += text.charAt(i);
    i++
  } else {
    i = 0;
    x.innerHTML = 'Beta'
  }
}

setInterval(myFunction, speed);