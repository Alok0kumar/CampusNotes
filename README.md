# 📚 College Notes Sharing Website

This is a simple, interactive website for students to **access study materials** like PPTs, PDFs, and assignments via **Google Drive links**.

Users can filter content by:

- ✅ College Year (1st to 4th Year)
- ✅ Branch (CSE, ECE, MECH, CIVIL, etc.)
- ✅ Subject (DBMS, Physics, etc.)

---

## 🚀 How It Works

1. Open `index.html` in a browser.
2. Select the **Year**, **Branch**, and **Subject** from the dropdowns.
3. Materials (with titles and Google Drive links) will appear below.

No backend needed — it's a static website using **HTML + CSS + JavaScript** only.

---

## 🛠 Adding Materials

Open `script.js` and find the `materials` array at the top.

To add a new resource:

```js
materials.push({
  year: "2nd Year",
  branch: "CSE",
  subject: "DBMS",
  title: "DBMS Assignment 1",
  link: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
});
