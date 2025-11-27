# DOM Event Phases & Event Delegation

## **1️⃣ Capturing Phase**

* Event flows **from root → target element**.
* Also called the **trickling phase**.
* Listener executes **before reaching the target** if `{ capture: true }` is used.

---

## **2️⃣ Bubbling Phase**

* Event flows **from target → root**.
* This is the **default behavior** for most event listeners.
* Useful for **event delegation**.

---

## **3️⃣ Target**

* The **actual element** that triggered the event.
* `event.target` gives the reference to this element.

---

## **4️⃣ Why use Event Delegation?**

Event delegation is a technique where **a single event listener is attached to a parent element** to handle events on its child elements.

### **Problems with attaching listeners individually to children**

1. **Memory consumption** – each child has its own listener, which can be heavy if there are many elements.
2. **Dynamic elements** – new children added after page load won’t have listeners automatically.
3. **Maintenance difficulty** – updating or removing listeners is error-prone when many children exist.

### **Solution**

* Attach a **single listener on the parent**.
* Use `event.target` to check **which child triggered the event**.
* Works for both **existing and dynamically added child elements**.

✅ **Benefits**

* Saves memory
* Easier to maintain
* Handles dynamic elements

---

This approach is commonly used in **lists, tables, menus, and dynamic UI components**.




# DOM Event Propagation Example

This repository demonstrates the behavior of **`stopPropagation()`** and **`stopImmediatePropagation()`** in DOM events, including both **capturing** and **bubbling** phases.

---

## **Event Phases**

1. **Capturing Phase** – Event travels from `document → parent → child`.
2. **Target Phase** – Event reaches the actual element clicked.
3. **Bubbling Phase** – Event travels from `child → parent → document`.

---

## **stopPropagation() Behavior**

### **Case 1: In Parent (Capturing)**

* Event flow: `parent (capturing) → child (capturing)`
* Calling `stopPropagation()`:

  * Stops event from reaching child
  * Other listeners on parent still run

✅ Result: Only parent listener runs, child listeners skipped.

### **Case 2: In Child (Capturing)**

* Event flow: `parent → child`
* Calling `stopPropagation()`:

  * Stops propagation to ancestors
  * Other listeners on same child still run

✅ Result: Parent listener already executed, other child listeners run.

---

## **stopImmediatePropagation() Behavior**

### **Case 1: In Parent (Capturing)**

* Event flow: `parent (capturing) → child (capturing)`
* Calling `stopImmediatePropagation()`:

  * Stops other listeners on parent
  * Stops propagation to child

✅ Result: Only the parent listener that called it runs; child listeners skipped.

### **Case 2: In Child (Capturing)**

* Event flow: `parent → child`
* Calling `stopImmediatePropagation()`:

  * Stops other listeners on child
  * Stops propagation to ancestors

✅ Result: Parent listener already executed, other child listeners skipped, event does not bubble up.

---

## **Quick Summary Table**

| Method                       | Call Location | Same Element Other Listeners | Ancestors/Children |
| ---------------------------- | ------------- | ---------------------------- | ------------------ |
| `stopPropagation()`          | parent        | ✅ Run                        | ❌ Child skipped    |
| `stopPropagation()`          | child         | ✅ Run                        | ❌ Parent stopped   |
| `stopImmediatePropagation()` | parent        | ❌ Skipped                    | ❌ Child skipped    |
| `stopImmediatePropagation()` | child         | ❌ Skipped                    | ❌ Parent stopped   |

---

## **Usage**

* Use `stopPropagation()` when you want to **prevent event from reaching ancestors** but allow other listeners on the same element to run.
* Use `stopImmediatePropagation()` when you want to **stop everything**: other listeners on the same element and propagation to ancestors/children.

---

This demo works with both **capturing** (`{ capture: true }`) and **bubbling** (default) phases.
