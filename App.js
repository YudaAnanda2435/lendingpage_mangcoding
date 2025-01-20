import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";


document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    centeredSlides: true, // Ensure active slide is in the center
    spaceBetween:24, // Gap between slides
    loop: true, // Enable looping
    slideToClickedSlide: false, // Slide to clicked slide
    slideActiveClass: "active", // Adds 'active' class to the center slide
    autoplay: {
      delay: 100, // Delay in milliseconds (1000 ms = 1 second)
      disableOnInteraction: false, // Keep autoplay running even after user interacts with the swiper
    },
    breakpoints: {
      768: {
        slidesPerView: 3, 
      },
      380: {
        slidesPerView: 1,
      }
    },
  });
});


const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// option
// Pilih elemen dropdown dan menu dropdown
const dropdown = document.querySelector(".dropdown ");
const dropdownMenu = dropdown.querySelector(".dropdown-menu");
const faSolid = dropdown.querySelector(".fa-solid");

// Tambahkan event listener untuk menangani klik pada dropdown
dropdown.addEventListener("click", function (e) {
  e.stopPropagation();
  // Toggle visibilitas menu dropdown (tampil atau sembunyi)
  faSolid.style.transform =
    faSolid.style.transform === "rotate(180deg)"
      ? "rotate(0deg)"
      : "rotate(180deg)";
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function () {
  faSolid.style.transform = "rotate(0deg)";
  dropdownMenu.style.display = "none";
});
// option


// nav opacity scroll
window.addEventListener("scroll", function () {
  const nav = document.getElementById("nav");
  const option = document.getElementById("option");
  const threshold = 90; // 4rem in pixels (assuming 1rem = 16px)

  if (window.scrollY >= threshold) {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.4)"; // Black with 50% opacity
    nav.style.backdropFilter = "blur(5px)"; // Add a 5px blur
    option.style.color = "gray";
    nav.style.display = "flex";
    nav.style.justifyContent = "space-between";
    nav.style.paddingBlock = "8px";
  } else {
    nav.style.backgroundColor = "transparent"; // Reset to transparent
    nav.style.backdropFilter = "blur(0)"; // Remove blur
    nav.style.paddingBlock = "12px";
    option.style.color = "black";
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

// Inisialisasi Swiper.js untuk mengatur slide
//

document
  .querySelectorAll(".paragraf-banner > div h4")
  .forEach(function (heading) {
    heading.addEventListener("click", function () {
      const parentDiv = heading.parentElement;
      const paragraph = parentDiv.querySelector("p");

      // Hide all other paragraphs
      document
        .querySelectorAll(".paragraf-banner > div p")
        .forEach(function (p) {
          if (p !== paragraph) {
            p.classList.remove("show");
            p.parentElement.classList.remove("active");
          }
        });

      // Toggle the current paragraph
      paragraph.classList.toggle("show");
      parentDiv.classList.toggle("active");
    });
  });
