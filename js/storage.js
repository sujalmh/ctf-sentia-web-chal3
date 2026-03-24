const USERS_KEY = "chal3_users";

function getUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUser(username, password) {
  const users = getUsers();
  if (users.some((u) => u.username === username)) {
    return false;
  }
  users.push({ username, password });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
}

function findUser(username, password) {
  return getUsers().find(
    (u) => u.username === username && u.password === password
  );
}
