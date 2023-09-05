"use strict";

// toggle icon navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// toggle menu icon class to show different icon
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("navbar__active");
};

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
      // active section for animation
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  // Add or remove 'sticky' class to header based on the scroll position
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when clicking on navbar links
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("navbar__active");
};

document.addEventListener("DOMContentLoaded", function () {
  const skills = document.querySelectorAll(".skills__single");
  const sections = document.querySelectorAll("section h2");

  // add animations for all skills
  skills.forEach((element, index) => {
    const span = document.createElement("span");
    span.className = "animate scroll";
    span.style = `--i: ${index / 2 + 1}`;
    element.appendChild(span);
  });

  // add animations for all section headers
  sections.forEach(element => {
    const span = document.createElement("span");
    span.className = "animate scroll";
    span.style = `--i: 1`;
    element.appendChild(span);
  });
});

// reset the form
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
