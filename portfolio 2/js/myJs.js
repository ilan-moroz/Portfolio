"use strict";

// toggle icon navbar

// scroll sections
// Query all section elements on the page
const sections = document.querySelectorAll("section");
// Query all anchor tags within the header's nav element
const navLinks = document.querySelectorAll("header nav a");

// Attach an onscroll event listener to the window object
window.onscroll = () => {
  sections.forEach(sec => {
    // Get the current scroll position from the top of the page
    const top = window.scrollY;
    // Get the offset top position of the current section and subtract 100
    const offset = sec.offsetTop - 150;
    // Get the height of the current section
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    // Check if the current scroll position is within the current section
    if (top >= offset && top < offset + height) {
      // Remove active class from all navLinks
      navLinks.forEach(link => {
        link.classList.remove("active");
        // Add active class to the navLink corresponding to the current section
        document
          .querySelector("header nav a[href*= " + id + "]")
          .classList.add("active");
      });
    }
  });

  // Add or remove 'sticky' class to header based on the scroll position
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 150);
};
