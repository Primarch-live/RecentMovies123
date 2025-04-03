document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      console.log(
        "Hamburger clicked, menu active:",
        navMenu.classList.contains("active")
      );
    });
  } else {
    console.error("Hamburger or navMenu not found");
  }
});
