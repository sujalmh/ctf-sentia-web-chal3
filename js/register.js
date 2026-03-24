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

  window.location.href = "index.html";
});
