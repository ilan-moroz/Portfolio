"use strict";

// toggle icon navbar

// scroll
window.onscroll = () => {
  const header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};
