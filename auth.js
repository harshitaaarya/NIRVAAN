// =========================
// ID PROOF PREVIEW
// =========================
document.addEventListener("change", (e) => {
  if (e.target.id === "idProof") {
    const file = e.target.files[0];
    const preview = document.getElementById("preview");

    const reader = new FileReader();
    reader.onload = () => {
      preview.src = reader.result;
      preview.style.display = "block";
    };
    if (file) reader.readAsDataURL(file);
  }
});

// =========================
// PASSWORD STRENGTH CHECK
// =========================
let strengthText = document.getElementById("strength");
let passwordField = document.getElementById("password");

if (passwordField) {
  passwordField.addEventListener("input", () => {
    let val = passwordField.value;
    let strength = "";

    if (val.length < 4) strength = "Weak ❌";
    else if (val.length < 7) strength = "Medium ⚠️";
    else strength = "Strong ✅";

    strengthText.innerText = "Password Strength: " + strength;
  });
}

// =========================
// OTP GENERATION
// =========================
let generatedOTP = "";

const otpBtn = document.getElementById("otpBtn");
if (otpBtn) {
  otpBtn.onclick = () => {
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    document.getElementById("otpBox").style.display = "block";
    alert("OTP Sent: " + generatedOTP);
  };
}

// =========================
// OTP Verification + Save Data
// =========================
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
if (verifyOtpBtn) {
  verifyOtpBtn.onclick = () => {
    let otpInput = document.getElementById("otpInput").value;

    if (otpInput !== generatedOTP) {
      alert("Incorrect OTP ❌");
      return;
    }

    alert("OTP Verified! 🎉 Account Created!");
    saveUser();
  };
}

// =========================
// SAVE USER DATA TO LOCAL STORAGE
// =========================
function saveUser() {
  let user = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    dob: document.getElementById("dob").value,
    paddress: document.getElementById("paddress").value,
    caddress: document.getElementById("caddress").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    mother: document.getElementById("mother").value,
    father: document.getElementById("father").value,
    gender: document.getElementById("gender").value,
    password: document.getElementById("password").value,
  };

  localStorage.setItem("nirvaanUser", JSON.stringify(user));
  window.location.href = "login.html";
}

// =========================
// LOGIN SYSTEM
// =========================
function loginUser() {
  let loginUser = document.getElementById("loginInput").value; // FIXED ID
  let loginPass = document.getElementById("loginPass").value;

  let savedUser = JSON.parse(localStorage.getItem("nirvaanUser"));

  if (!savedUser) {
    alert("No account found!");
    return;
  }

  if (
    (loginUser === savedUser.email || loginUser === savedUser.phone) &&
    loginPass === savedUser.password
  ) {
    alert("Login Successful 🎉");
    window.location.href = "index.html";
  } else {
    alert("Incorrect Login Details ❌");
  }
}

// =========================
// LOGOUT
// =========================
function logout() {
  localStorage.removeItem("nirvaanUser");
  alert("Logged out successfully 🔒");
  window.location.href = "login.html";
}
function toggleLoginPass() {
  let pass = document.getElementById("loginPass");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

// ❗ REMOVED THE WRONG LINE THAT WAS BREAKING EVERYTHING
