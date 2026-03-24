document.addEventListener("DOMContentLoaded", () => {
  const name = takeWelcomeBanner();
  const el = document.getElementById("welcome-banner");
  if (!el || !name) return;
  el.textContent = "Welcome, " + name + "!";
  el.style.display = "block";
});
