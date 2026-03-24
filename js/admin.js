(function () {
  if (!isAdminSession()) {
    window.location.replace("login.html");
    return;
  }

  const flagEl = document.getElementById("flag");
  if (flagEl && window.ADMIN_PANEL_FLAG) {
    flagEl.textContent = window.ADMIN_PANEL_FLAG;
  }

  document.getElementById("logout").addEventListener("click", () => {
    clearAdminSession();
    window.location.href = "index.html";
  });
})();
