// Navigation
function openPage(url) {
  window.location.href = url;
}

// Dark/Light mode toggle
const toggle = document.getElementById("toggleMode");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Typing Effect
const text = "NIRVAAN";
let i = 0;
let isDeleting = false;

function typing() {
  const title = document.getElementById("nirvaan");

  if (!isDeleting && i <= text.length) {
    title.textContent = text.substring(0, i);
    i++;
    setTimeout(typing, 200);
  } else if (isDeleting && i > 0) {
    title.textContent = text.substring(0, i);
    i--;
    setTimeout(typing, 100);
  } else {
    isDeleting = !isDeleting;
    setTimeout(typing, 1200);
  }
}

typing();

// Journal Save
document.getElementById("saveJournal").addEventListener("click", () => {
  let entry = document.getElementById("journalText").value;
  localStorage.setItem("nirvaan_journal", entry);
  alert("Saved in browser!");
});

// Load Journal Back
document.getElementById("journalText").value =
  localStorage.getItem("nirvaan_journal") || "";
