// Floating hearts
const heartBox = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 30 + 15 + "px";
  heart.style.animationDuration = Math.random() * 4 + 3 + "s";
  heartBox.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 250);

// Start
function start() {
  document.getElementById("music").play();
  document.getElementById("intro").classList.remove("active");
  document.getElementById("question").classList.add("active");
}

// NO button runs away
const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 120 + "px";
}

// Slideshow
function startSlideshow() {
  document.getElementById("question").classList.remove("active");
  document.getElementById("slideshow").classList.add("active");

  let slides = document.querySelectorAll(".slide");
  let i = 0;

  let interval = setInterval(() => {
    slides[i].classList.remove("active");
    i++;

    if (i >= slides.length) {
      clearInterval(interval);
      setTimeout(showFinal, 1000);
      return;
    }

    slides[i].classList.add("active");
  }, 2500);
}

// Final screen
function showFinal() {
  document.getElementById("slideshow").classList.remove("active");
  document.getElementById("final").classList.add("active");
}