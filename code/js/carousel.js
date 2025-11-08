const images = document.querySelectorAll(".carousel-images img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".carousel-dots");
const overlay = document.getElementById("imgOverlay");
const overlayImg = document.getElementById("overlayImage");
const overlayClose = document.querySelector(".close-img");
const overlayNext = document.querySelector(".overlay-next");
const overlayPrev = document.querySelector(".overlay-prev");

let index = 0;

// Création des points
images.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showImage(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showImage(i) {
  images[index].classList.remove("active");
  dots[index].classList.remove("active");
  index = i;
  images[index].classList.add("active");
  dots[index].classList.add("active");
}

// Navigation
nextBtn.addEventListener("click", () => showImage((index + 1) % images.length));
prevBtn.addEventListener("click", () => showImage((index - 1 + images.length) % images.length));

// Click image → fullscreen
images.forEach(img => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayImg.src = img.src;
  });
});

// Fermeture overlay
overlayClose.addEventListener("click", () => overlay.style.display = "none");

// Navigation dans overlay
overlayNext.addEventListener("click", () => {
  nextBtn.click();
  overlayImg.src = images[index].src;
});
overlayPrev.addEventListener("click", () => {
  prevBtn.click();
  overlayImg.src = images[index].src;
});
