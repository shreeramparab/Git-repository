document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const menuClose = document.getElementById("menuClose");
  const links = document.querySelectorAll(".mobile-link");
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  const yearEl = document.getElementById("year");
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  // Update year
  yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  menuBtn.addEventListener("click", () => mobileNav.classList.remove("hidden"));
  menuClose.addEventListener("click", () => mobileNav.classList.add("hidden"));
  links.forEach(l => l.addEventListener("click", () => mobileNav.classList.add("hidden")));

  // Theme toggle
  const current = localStorage.getItem("theme");
  if (current === "light") root.classList.add("light");
  themeToggle.addEventListener("click", () => {
    root.classList.toggle("light");
    localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
  });

  // Form submission mock
  form.addEventListener("submit", e => {
    e.preventDefault();
    statusEl.textContent = "Sending...";
    submitBtn.disabled = true;
    setTimeout(() => {
      statusEl.textContent = "Message sent successfully (demo).";
      submitBtn.disabled = false;
      form.reset();
    }, 800);
  });
});

