const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");

  menuToggle.addEventListener("click", function () {
    // Toggle class to switch background color
    menuToggle.classList.toggle("bg-white");
  });
});



const cards = document.querySelectorAll(".card-carousel");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    // Remove the active class from all cards
    cards.forEach((c) => c.classList.remove("active"));

    // Add the active class to the clicked card
    card.classList.add("active");

    // Update the transform property for positioning
    const offset = 20; // Adjust as needed
    cards.forEach((c, i) => {
      const position = i - index; // Relative position to the clicked card
      c.style.transform = `translateX(${position * offset}px) scale(${
        i === index ? 1 : 1
      })`;
      c.style.opacity = i === index ? 1 : 0.5;
      c.style.filter = i === index ? "blur(0)" : "blur(2px)";
    });
  });
});

// Set initial positioning
cards.forEach((card, i) => {
  const offset = 10; // Adjust as needed
  card.style.transform = `translateX(${i * offset}px)`;
});
