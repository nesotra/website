mobileNav = document.querySelector(".mobile-nav");

navLinks = document.querySelector(".nav-links");

function hide() {
  navLinks.classList.toggle("hide");
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// JavaScript to change the text in the typing container
const typingContainer = document.getElementById("typing-container");
const textElement = document.getElementById("text");
const texts = ["Construction", "Travaux divers"];

let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
    textElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Adjust typing speed here (milliseconds)
  } else {
    setTimeout(erase, 1000); // Wait before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); // Adjust erasing speed here (milliseconds)
  } else {
    textIndex = (textIndex + 1) % texts.length; // Switch to the next text
    setTimeout(type, 500); // Wait before typing the next text
  }
}

// Start the typing animation
setTimeout(type, 1000); // Delay before starting the animation

// JavaScript for the image slider
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

let currentIndex = 0;

function slide() {
  currentIndex = currentIndex + 1;
  if (currentIndex < images.length) {
    currentIndex = currentIndex;
  } else {
    currentIndex = 0;
  }
  // currentIndex = (currentIndex + 1) % images.length;
  console.log(currentIndex);
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Start the image slider
setInterval(slide, 2000); 

//open whatsapp on button click
const phoneNumber = "212666202106";

document
  .getElementById("openWhatsAppButton")
  .addEventListener("click", function () {
    var whatsappURL = "whatsapp://send?phone=" + phoneNumber;
    window.location.href = whatsappURL;
  });

function makePhoneCall() {
  window.location.href = "tel:" + phoneNumber;
}
