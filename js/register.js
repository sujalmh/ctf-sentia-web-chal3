const REDIRECT_MS = 1800;

function showRegistrationSuccess() {
  const err = document.getElementById("err");
  const success = document.getElementById("success");
  const formBlock = document.getElementById("form-block");
  const nav = document.getElementById("register-nav");

  err.style.display = "none";
  formBlock.style.display = "none";
  if (nav) nav.style.display = "none";

  success.textContent =
    "Registration successful. Redirecting to the home page…";
  success.style.display = "block";

  setTimeout(() => {
    window.location.href = "index.html";
  }, REDIRECT_MS);
}

document.getElementById("register-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value;
  const err = document.getElementById("err");

  err.style.display = "none";
  err.textContent = "";

  if (!username || !password) {
    err.textContent = "Choose a username and password.";
    err.style.display = "block";
    return;
  }

  if (username === ADMIN_USERNAME) {
    err.textContent = "That username is reserved.";
    err.style.display = "block";
    return;
  }

  if (!saveUser(username, password)) {
    err.textContent = "Username already taken.";
    err.style.display = "block";
    return;
  }

  showRegistrationSuccess();
});
