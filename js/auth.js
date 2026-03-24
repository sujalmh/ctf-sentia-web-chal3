/**
 * Admin gate: credentials checked client-side (CTF — inspect the logic).
 */
var ADMIN_USERNAME = "sentia_admin";
var ADMIN_PASSWORD = "Sup3rS3cretPortal!";

const SESSION_ADMIN = "chal3_admin_session";

/** Shown in the admin panel after login (same file as admin credentials). */
window.ADMIN_PANEL_FLAG = "flag{client_side_admin_gate}";

function isAdminSession() {
  return sessionStorage.getItem(SESSION_ADMIN) === "1";
}

function setAdminSession() {
  sessionStorage.setItem(SESSION_ADMIN, "1");
}

function clearAdminSession() {
  sessionStorage.removeItem(SESSION_ADMIN);
}

function tryAdminLogin(username, password) {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

const WELCOME_USER_KEY = "sentia_welcome_user";

function setWelcomeBanner(username) {
  sessionStorage.setItem(WELCOME_USER_KEY, username);
}

/** Returns username once, then clears it so refresh does not repeat the banner. */
function takeWelcomeBanner() {
  const u = sessionStorage.getItem(WELCOME_USER_KEY);
  if (u) sessionStorage.removeItem(WELCOME_USER_KEY);
  return u;
}
