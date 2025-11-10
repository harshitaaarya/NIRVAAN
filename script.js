// Typing animation
const text = "NIRVAAN";
let i = 0;
const typingSpeed = 200;
const title = document.getElementById("nirvaan");
function typeEffect() {
  if (i < text.length) {
    title.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, typingSpeed);
  }
}
typeEffect();

// Navigation
function openPage(url) {
  window.location.href = url;
}

// Dark/Light mode toggle
const toggle = document.getElementById("toggleMode");
toggle.onclick = () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
};

// Scroll animation
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("in");
  });
});

// Journal local storage
const saveBtn = document.getElementById("saveJournal");
const journalText = document.getElementById("journalText");
journalText.value = localStorage.getItem("journal") || "";
saveBtn.onclick = () => {
  localStorage.setItem("journal", journalText.value);
  alert("📝 Journal saved locally!");
};

// Motivational quotes
const quotes = [
  "You are stronger than you think.",
  "Every day is a fresh start.",
  "Your feelings are valid.",
  "Healing takes time — and you’re doing great!",
];
const quoteBox = document.getElementById("quoteBox");
setInterval(() => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.textContent = quote;
  quoteBox.classList.add("show");
  setTimeout(() => quoteBox.classList.remove("show"), 4000);
}, 10000);

// Login modal
const modal = document.getElementById("loginModal");
document.getElementById("loginBtn").onclick = () => (modal.style.display = "flex");
document.getElementById("closeModal").onclick = () =>
  (modal.style.display = "none");
