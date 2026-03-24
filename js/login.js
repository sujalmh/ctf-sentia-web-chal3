const REDIRECT_MS = 1800;

function showSuccessThenRedirect(message, url) {
  const err = document.getElementById("err");
  const success = document.getElementById("success");
  const formBlock = document.getElementById("form-block");
  const nav = document.getElementById("login-nav");

  err.style.display = "none";
  formBlock.style.display = "none";
  if (nav) nav.style.display = "none";

  success.textContent = message;
  success.style.display = "block";

  setTimeout(() => {
    window.location.href = url;
  }, REDIRECT_MS);
}

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
    showSuccessThenRedirect(
      "Login successful. Redirecting to the admin panel…",
      "admin.html"
    );
    return;
  }

  if (findUser(username, password)) {
    showSuccessThenRedirect(
      "Login successful. Redirecting to the home page…",
      "index.html"
    );
    return;
  }

  err.textContent = "Invalid credentials.";
  err.style.display = "block";
});
