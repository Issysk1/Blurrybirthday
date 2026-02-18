document.addEventListener("DOMContentLoaded", function() {

// PASSWORD
const passwordGate = document.getElementById("passwordGate");
const mainContent = document.getElementById("mainContent");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const passwordMessage = document.getElementById("passwordMessage");
const secretPassword = "1902";

submitPassword.onclick = () => {
  if (passwordInput.value === secretPassword) {
    passwordGate.classList.add("hidden");
    mainContent.classList.remove("hidden");
  } else {
    passwordMessage.innerText = "That’s not your day 🤍";
  }
};

// PETALS
setInterval(() => {
  const p = document.createElement("div");
  p.className = "petal";
  p.innerText = "🌸";
  p.style.left = Math.random() * window.innerWidth + "px";
  p.style.bottom = "-20px";
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 7000);
}, 500);

// BUTTON GAME
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const yesMessage = document.getElementById("yesMessage");

yesBtn.onclick = () => {
  document.getElementById("invite").classList.add("hidden");
  yesMessage.classList.remove("hidden");
};

noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * window.innerWidth + "px";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
};

});
