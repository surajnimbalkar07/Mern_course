# Lecture 37 - JavaScript Todo List DOM Manipulation

A beginner-friendly guide on **creating a dynamic Todo List** with JavaScript, including **adding, editing, and deleting items**.

---

## **Contents**

1. [Overview](#overview)
2. [Key Concepts](#key-concepts)
3. [Adding Todos](#adding-todos)
4. [Editing Todos](#editing-todos)
5. [Deleting Todos](#deleting-todos)

---

## **Overview**

* We are creating a **dynamic Todo List** using **JavaScript and DOM manipulation**.
* Each todo is represented as a **div element** containing the todo text, an edit input, and buttons for edit/delete.
* Users can **add, edit, and delete** todo items interactively.

---

## **Key Concepts**

1. **Selecting DOM elements**: `querySelector` to select buttons, inputs, and containers.
2. **Event listeners**: Listening for `click` events to handle adding, editing, and deleting todos.
3. **Dynamic element creation**: Using `document.createElement` and `innerHTML` to render todo items.
4. **Objects & arrays**: Store todo data in objects and arrays to dynamically render content.
5. **Resetting input**: Clearing input after adding a todo.

---

## **Adding Todos**

1. Get the input value and trim whitespace.
2. Create a **todo object** with the todo text.
3. Push the object to the `todo` array.
4. Create a new `div` element for the todo.
5. Use `map()` to dynamically generate HTML from the array.
6. Append the todo div to the container.
7. Clear the input for the next entry.

**Tip:** `todo = []` resets the array to prepare for the next input cycle.

---

## **Editing Todos**

* Each todo has an **Edit button**.
* On click:

  1. If in **Edit mode**, show the input and hide the text.
  2. If in **Save mode**, hide the input, show the text, and update it with the input value.
* Toggle the button text between **Edit** and **Save**.

---

## **Deleting Todos**

* Each todo has a **Delete button**.
* On click, the corresponding todo element is removed from the DOM using `.remove()`.

---

## **Takeaways**

* DOM elements can be dynamically created and manipulated for interactive UI.
* Objects and arrays can temporarily store data for rendering purposes.
* Event delegation and listeners allow users to interact with elements dynamically.
* Using input validation (`trim()` and checking empty values) ensures robust functionality.

**Result:**
A fully functional Todo List with **Add, Edit, and Delete features** using plain JavaScript.
