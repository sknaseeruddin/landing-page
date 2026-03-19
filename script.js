const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  if (name === "") {
    formMessage.textContent = "Please enter your name.";
    formMessage.style.color = "#fca5a5";
    return;
  }

  formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
  formMessage.style.color = "#86efac";

  contactForm.reset();
});