document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", () => {
      localStorage.setItem("formSubmitted", "true");
    });
  }
});

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");

  navToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      navToggle.classList.toggle("active");
  });
});
