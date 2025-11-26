# FileReader, DataURL, and JavaScript Events - Simple Theory

---

## **1. FileReader (Simple Theory)**

* **FileReader** is a JavaScript object used to **read files selected by the user** through a file input.
* It allows access to file contents **without uploading to a server**.
* Can read files as:

  * **Text** (`readAsText(file)`) – for text files
  * **Data URL** (`readAsDataURL(file)`) – for images or binary files
  * **ArrayBuffer** (`readAsArrayBuffer(file)`) – for binary data

**Key points:**

* Reading is **asynchronous**, so we use `onload` event to get the data.
* Example use: preview images before uploading, read text files in browser.

---

## **2. Base64 and Data URL**

* **Base64**: A way to encode binary files (like images) into **text strings**.
* **Data URL**: A string that contains **file data in Base64 format**, usable directly in `src` or `href` attributes.

**Use Case Example:**

* Display an uploaded image without sending it to a server:

```js
const reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = () => {
  image.src = reader.result; // Data URL
};
```

---

## **3. JavaScript Events (Simple Theory)**

### **Common Input Events**

1. **change**

   * Triggered when:

     1. Element loses focus (`blur`)
     2. The value has been changed

2. **input**

   * Triggered on **every key press or input change**
   * Useful for **real-time validation**
   * Always fires **before change** event

3. **blur** – Triggered when an element **loses focus**

4. **focus** – Triggered when an element **gains focus**

**Summary of behavior:**

* Typing → triggers `input` immediately
* Leaving field after change → triggers `change`
* `blur` → losing focus
* `focus` → gaining focus
