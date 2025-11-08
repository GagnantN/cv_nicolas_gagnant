let currentCarousel = null;

document.querySelectorAll(".carousel").forEach(carousel => {
  const images = carousel.querySelectorAll(".carousel-images img");
  const nextBtn = carousel.querySelector(".next");
  const prevBtn = carousel.querySelector(".prev");
  const dotsContainer = carousel.querySelector(".carousel-dots");

  let index = 0;

  // Créer les points (dots)
  images.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showImage(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".dot");

  function showImage(i) {
    images[index].classList.remove("active");
    dots[index].classList.remove("active");
    index = i;
    images[index].classList.add("active");
    dots[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => showImage((index + 1) % images.length));
  prevBtn.addEventListener("click", () => showImage((index - 1 + images.length) % images.length));

  // OUVERTURE OVERLAY (lier au bon carrousel)
  images.forEach(img => {
    img.addEventListener("click", () => {
      overlay.style.display = "flex";
      overlayImg.src = img.src;
      currentCarousel = { images, showImage, indexRef: () => index, setIndex: i => index = i };
    });
  });
});

// ---------- OVERLAY (Fullscreen) ----------
const overlay = document.getElementById("imgOverlay");
const overlayImg = document.getElementById("overlayImage");
const overlayClose = document.querySelector(".close-img");
const overlayNext = document.querySelector(".overlay-next");
const overlayPrev = document.querySelector(".overlay-prev");

overlayClose.addEventListener("click", () => overlay.style.display = "none");

overlayNext.addEventListener("click", () => {
  if (!currentCarousel) return;
  let i = (currentCarousel.indexRef() + 1) % currentCarousel.images.length;
  currentCarousel.setIndex(i);
  overlayImg.src = currentCarousel.images[i].src;
});

overlayPrev.addEventListener("click", () => {
  if (!currentCarousel) return;
  let i = (currentCarousel.indexRef() - 1 + currentCarousel.images.length) % currentCarousel.images.length;
  currentCarousel.setIndex(i);
  overlayImg.src = currentCarousel.images[i].src;
});
