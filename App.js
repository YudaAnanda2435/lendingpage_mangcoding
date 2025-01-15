const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// nav opacity scroll
window.addEventListener("scroll", function () {
  const nav = document.getElementById("nav");
  const option = document.getElementById("option");
  const threshold = 64; // 4rem in pixels (assuming 1rem = 16px)

  if (window.scrollY >= threshold) {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.4)"; // Black with 50% opacity
    nav.style.backdropFilter = "blur(5px)"; // Add a 5px blur
    option.style.color = "gray";
    nav.style.padding = "6px 80px ";
  } else {
    nav.style.backgroundColor = "rgba(255, 255, 255, 1)"; // White with full opacity
    nav.style.backdropFilter = "blur(0)"; // Remove blur
    option.style.color = "black";
    nav.style.padding = "14px 80px";
  }
});

// nav opacity scroll


// asked
// Select all asked elements
document.querySelectorAll(".option-asked > div").forEach(function (asked) {
  const icon = asked.querySelector(".fa-solid ");
  const paragraph = asked.querySelector("p");

  // Add click event to each icon
  icon.addEventListener("click", function () {
    // Close all paragraphs in other asked elements
    document.querySelectorAll(".option-asked p").forEach(function (p) {
      if (p !== paragraph) {
        p.classList.remove("show");
      }
    });

    // Toggle the current paragraph
    paragraph.classList.toggle("show");
  });
});

// asked

document
  .getElementById("switch-toggle")
  .addEventListener("change", function () {
    var yearlyParagraph = document.getElementById("yearly");
    var monthlyParagraph = document.getElementById("monthly");
    var priceElement = document.getElementById("price");
    var priceElement1 = document.getElementById("price1");
    var priceElement2 = document.getElementById("price2");
    var priceDuration = document.getElementById("price-duration");

    if (this.checked) {
      yearlyParagraph.classList.add("active");
      monthlyParagraph.classList.remove("active");
      priceElement.innerHTML = "$100/ <span id='price-duration'>year</span>";
      priceElement1.innerHTML = "$250/ <span id='price-duration'>year</span>";
      priceElement2.innerHTML = "$300/ <span id='price-duration'>year</span>";
    } else {
      monthlyParagraph.classList.add("active");
      yearlyParagraph.classList.remove("active");
      priceElement.innerHTML = "$10/ <span id='price-duration'>month</span>";
      priceElement1.innerHTML = "$25/ <span id='price-duration'>month</span>";
      priceElement2.innerHTML = "$50/ <span id='price-duration'>month</span>";
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("bg-white");
  });
});

const cards = document.querySelectorAll(".card-carousel");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
    const offset = 20;
    cards.forEach((c, i) => {
      const position = i - index;
      c.style.transform = `translateX(${position * offset}px) scale(${
        i === index ? 1 : 1
      })`;
      c.style.opacity = i === index ? 1 : 0.5;
      c.style.filter = i === index ? "blur(0)" : "blur(2px)";
    });
  });
});

cards.forEach((card, i) => {
  const offset = 10;
  card.style.transform = `translateX(${i * offset}px)`;
});
