const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const handleIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, observerOptions);

window.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.fade-in');
  animatedElements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const demoImages = document.querySelectorAll(".demo-image");

  // Loop through all images with the .demo-image class
  demoImages.forEach(image => {
    image.addEventListener("click", () => {
      lightboxImg.src = image.src; // Set the popup image source to the clicked image source
      lightboxImg.alt = image.alt; // Pass along the alt text
      lightbox.classList.add("active"); // Display the lightbox
    });
  });
});