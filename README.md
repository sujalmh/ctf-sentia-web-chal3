# CTF Challenge — Hardcoded Admin Gate

**Category:** Web  
**Difficulty:** Beginner  
**Concept:** Client-side authentication and exposed secrets

---

## Challenge Description

Sentia Portal has registration, login, and a rumor of an admin panel. Regular users only ever see the public landing page. Find a way to reach the real admin area and capture the flag.

---

## Run Locally

**Option A — any static server**

```bash
git clone https://github.com/sujalmh/sentia-web.git
cd sentia-web
npx --yes serve -l 3000 .
```

**Option B — npm script**

```bash
cd sentia-web
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploy

Host this repository as static files (GitHub Pages, Netlify, Vercel static, S3, etc.). No build step or environment variables required.

---

## Solve (spoiler)

Admin verification runs in the browser. Inspect the JavaScript that handles login and use the credentials there to sign in; you will be redirected to the admin panel where the flag is shown.

---

## Flag

```
flag{client_side_admin_gate}
```
