
# Browser Memory Storage & LocalStorage 

---

## 🚫 In-Memory Storage (Normal JS Memory)

* Data disappears when we **reload the page**
* Browser gives only **5–10 MB temporary space**
* This temporary memory is cleared on refresh or tab close
* Not suitable for saving data permanently

---

## 🌐 Origin vs Domain (Very Simple)

* **Domain:** example.com
* **Subdomain:** app.example.com
* **Port:** :3000
* **Protocol:** http/https

👉 **Origin = protocol + domain + subdomain + port**

LocalStorage works only for the **same origin**.

---

## 📦 What is LocalStorage?

LocalStorage is a browser storage that stores data in **key–value pairs**.

* Both **key and value must be strings**
* Data stays even after:

  * Page reload
  * Browser restart
  * Tab closing

---

## ✔ Example

```js
localStorage.setItem("username", "Suraj");
localStorage.getItem("username");
```

To store objects:

```js
localStorage.setItem("user", JSON.stringify({ name: "Suraj" }));
JSON.parse(localStorage.getItem("user"));
```

---

## ⚠ Limitations

* Only works with **strings**
* Need JSON for objects
* Storage limit: **5–10 MB**
* If limit is crossed → **QuotaExceededError**
* Too many writes can slow the page (it is synchronous)

---

## 🔍 Check if LocalStorage Exists

```js
function checkLocalStorage() {
  try {
    const test = "__test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}
```

---

## 🔒 Security (Super Simple Explanation)

LocalStorage is **not secure** because:

* Anyone can see the data in browser dev tools
* Data is stored as **plain text**
* If a hacker adds script (XSS), they can read LocalStorage
* No auto-expiry
* No httpOnly protection

### ❌ Never store:

* Passwords
* Tokens (JWT, access token)
* API keys
* Personal sensitive data

### ✔ Safe to store:

* Theme (dark/light)
* UI preferences
* Non-sensitive info
 