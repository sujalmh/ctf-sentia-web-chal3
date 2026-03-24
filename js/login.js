document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const err = document.getElementById("err");

  err.style.display = "none";
  err.textContent = "";

  if (!username || !password) {
    err.textContent = "Enter username and password.";
    err.style.display = "block";
    return;
  }

  if (tryAdminLogin(username, password)) {
    setAdminSession();
    window.location.href = "admin.html";
    return;
  }

  if (findUser(username, password)) {
    window.location.href = "index.html";
    return;
  }

  err.textContent = "Invalid credentials.";
  err.style.display = "block";
});
