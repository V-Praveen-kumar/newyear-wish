const scenes = [
  { text: "A new year deserves more than just a wish…", photo: "images/photo1.jpg" },
  { text: "Some moments stay with us forever.", photo: "images/photo2.jpg" },
  { text: "Some smiles make everything feel lighter.", photo: "images/photo3.jpg" },
  { text: "Some memories don’t fade with time.", photo: "images/photo4.jpg" },
  { text: "And some people make the year brighter.", photo: "images/photo5.jpg" },
  { text: "Through every high and low, you mattered.", photo: "images/photo6.jpg" },
  { text: "Here’s to everything that made this year special.", photo: "images/photo7.jpg" },
  { text: "Happy New Year Susaa✨", photo: "images/photo8.jpg", fireworks: true }
];

let index = 0;

const text = document.getElementById("text");
const photo = document.getElementById("photo");

function showScene() {
  // fade out
  text.style.opacity = 0;
  photo.style.opacity = 0;

  setTimeout(() => {
    // update content
    text.innerText = scenes[index].text;
    photo.src = scenes[index].photo;

    // fade in together
    text.style.opacity = 1;
    photo.style.opacity = 1;

    index++;
    if (index < scenes.length) {
      setTimeout(showScene, 4000);
    }
  }, 1000);
}

// start
showScene();