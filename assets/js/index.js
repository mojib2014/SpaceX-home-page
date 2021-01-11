// DOM Elements
const humBtn = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const backToTop = document.querySelector(".back-to-top");

// Header offset
const headerOffset = header.offsetTop;
// Click Event Listeners
humBtn.addEventListener("click", () => {
  if (nav.style.display === "block") nav.style.display = "none";
  else nav.style.display = "block";
});

backToTop.addEventListener("click", () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    window.scroll({ top: 0, behavior: "smooth" });
  }
});

// Scroll Event Listner
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 800) {
    backToTop.style.display = "block";
    header.style.backgroundColor = "#333";
  } else {
    header.style.backgroundColor = "";
    backToTop.style.display = "none";
  }
});
