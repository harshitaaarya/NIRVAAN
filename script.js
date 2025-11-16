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
// ---------------- USER LOGIN STATUS CHECK ---------------- //

function checkLoginStatus() {
  const user = JSON.parse(localStorage.getItem("nirvaanUser"));

  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const helloUser = document.getElementById("helloUser");

  if (!user) {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
    if (helloUser) helloUser.style.display = "none";
  } else {
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
    if (helloUser) {
      helloUser.style.display = "inline-block";
      helloUser.innerText = `Hello, ${user.firstName} 👋`;
    }
  }
}

function logout() {
  localStorage.removeItem("nirvaanUser");
  alert("Logged out successfully!");
  window.location.reload();
}

// Run on page load
checkLoginStatus();

// ---------------- USER LOGIN STATUS CHECK ---------------- //

function checkLoginStatus() {
  const user = JSON.parse(localStorage.getItem("nirvaanUser"));

  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const helloUser = document.getElementById("helloUser");

  if (!user) {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
    if (helloUser) helloUser.style.display = "none";
  } else {
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
    if (helloUser) {
      helloUser.style.display = "inline-block";
      helloUser.innerText = `Hello, ${user.firstName} 👋`;
    }
  }
}

// LOGOUT FUNCTION
function logout() {
  localStorage.removeItem("nirvaanUser");
  alert("Logged out successfully!");
  window.location.reload();
}

// Run when page loads
checkLoginStatus();
<script>
  let user = JSON.parse(localStorage.getItem("nirvaanUser"));

  if (user) {
    document.getElementById("userName").innerText = user.fname + " " + user.lname;
    document.getElementById("userEmail").innerText = user.email;
    document.getElementById("userPhone").innerText = user.phone;
  }
</script>



