document.addEventListener("DOMContentLoaded", () => {
  // ---------- Typing Animation ----------
  const title = document.getElementById("nirvaan");
  const text = "NIRVAAN";
  let i = 0;
  let isDeleting = false;
  const speed = 200;      // typing speed
  const eraseSpeed = 100; // deleting speed
  const pause = 1200;     // pause before deleting

  function typeNirvaan() {
    if (!title) return;

    if (!isDeleting) {
      title.textContent = text.substring(0, i);
      i++;
      if (i > text.length) {
        isDeleting = true;
        setTimeout(typeNirvaan, pause);
      } else {
        setTimeout(typeNirvaan, speed);
      }
    } else {
      title.textContent = text.substring(0, i);
      i--;
      if (i < 0) {
        isDeleting = false;
        setTimeout(typeNirvaan, speed);
      } else {
        setTimeout(typeNirvaan, eraseSpeed);
      }
    }
  }

  typeNirvaan();

  // ---------- Navigation ----------
  window.openPage = (url) => window.location.href = url;

  // ---------- Dark/Light mode ----------
  const toggle = document.getElementById("toggleMode");
  if (toggle) toggle.addEventListener("click", () => document.body.classList.toggle("dark-mode"));

  // ---------- User Login ----------
  const user = JSON.parse(localStorage.getItem("nirvaanUser"));
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const helloUser = document.getElementById("helloUser");

  function checkLoginStatus() {
    if (!user) {
      if (loginBtn) loginBtn.style.display = "inline-block";
      if (logoutBtn) logoutBtn.style.display = "none";
      if (helloUser) helloUser.style.display = "none";
    } else {
      if (loginBtn) loginBtn.style.display = "none";
      if (logoutBtn) logoutBtn.style.display = "inline-block";
      if (helloUser) {
        helloUser.style.display = "inline-block";
        helloUser.innerText = `Hello, ${user.fname} 👋`;
      }
    }
  }

  window.logout = () => {
    localStorage.removeItem("nirvaanUser");
    alert("Logged out successfully!");
    window.location.reload();
  };

  checkLoginStatus();

  // ---------- Journal Save/Load ----------
  const journalText = document.getElementById("journalText");
  const saveJournal = document.getElementById("saveJournal");
  if (journalText && saveJournal) {
    const journalKey = user ? `journal_${user.email}` : 'nirvaan_journal';
    journalText.value = localStorage.getItem(journalKey) || "";
    saveJournal.addEventListener("click", () => {
      localStorage.setItem(journalKey, journalText.value);
      alert("Saved in browser!");
    });
  }
});
