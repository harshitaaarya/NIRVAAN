// ---------- SHOW/HIDE PASSWORD ----------
function togglePass() {
  let pass = document.getElementById("password");
  let cpass = document.getElementById("confirmPassword");
  pass.type = pass.type === "password" ? "text" : "password";
  cpass.type = cpass.type === "password" ? "text" : "password";
}

function toggleLoginPass() {
  let pass = document.getElementById("loginPass");
  pass.type = pass.type === "password" ? "text" : "password";
}

// ---------- PASSWORD STRENGTH ----------
function checkStrength() {
  let pass = document.getElementById("password").value;
  let strength = document.getElementById("strengthText");

  if (pass.length < 4) strength.innerHTML = "Weak 🔴";
  else if (pass.length < 8) strength.innerHTML = "Medium 🟡";
  else strength.innerHTML = "Strong 🟢";
}

// ---------- ID PROOF PREVIEW ----------
document.getElementById("idproof").onchange = function () {
  const img = document.getElementById("preview");
  img.src = URL.createObjectURL(this.files[0]);
  img.style.display = "block";
};

// ---------- REGISTER USER ----------
function registerUser() {
  let user = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    dob: document.getElementById("dob").value,
    paddress: document.getElementById("paddress").value,
    caddress: document.getElementById("caddress").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    father: document.getElementById("father").value,
    mother: document.getElementById("mother").value,
    gender: document.getElementById("gender").value,
    password: document.getElementById("password").value,
    idProof: document.getElementById("idproof").value
  };

  if (user.password !== document.getElementById("confirmPassword").value) {
    alert("Passwords do not match!");
    return;
  }

  // SAVE to LocalStorage
  localStorage.setItem(user.email, JSON.stringify(user));
  localStorage.setItem(user.phone, JSON.stringify(user));

  alert("Registration successful!");
  window.location.href = "login.html";
}

// ---------- LOGIN USER ----------
function loginUser() {
  let input = document.getElementById("loginInput").value;
  let pass = document.getElementById("loginPass").value;

  let user = JSON.parse(localStorage.getItem(input));

  if (!user) {
    alert("User Not Found!");
    return;
  }

  if (user.password !== pass) {
    alert("Wrong Password!");
    return;
  }

  alert("Login Successful!");
  window.location.href = "index.html"; // NIRVAAN Homepage
}
