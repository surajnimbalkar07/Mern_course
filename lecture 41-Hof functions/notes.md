# Lecture 41 - JavaScript Higher-Order Functions (HOF)

A beginner-friendly guide on **higher-order functions (HOF)** in JavaScript with simple examples.

---

## **Contents**

1. [map()](#map)
2. [filter()](#filter)
3. [reduce()](#reduce)
4. [forEach()](#foreach)
5. [sort()](#sort)

---

## **map()**

* **Definition:** Creates a new array by **applying a function** to each element of an array.

**Example:**

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

---

## **filter()**

* **Definition:** Creates a new array with **elements that pass a test** implemented by a function.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]
```

---

## **reduce()**

* **Definition:** Reduces an array to a **single value** by applying a function.

**Example:**

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

---

## **forEach()**

* **Definition:** Executes a function on **each element** of the array.
* Does **not return a new array**.

**Example:**

```js
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6
```

---

## **sort()**

* **Definition:** Sorts the elements of an array using a **compare function**.

**Example:**

```js
const numbers = [3, 1, 4, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4]
```

---

**Takeaway:**
HOFs are widely used in JavaScript for **array operations, callbacks, and functional programming**, making code **cleaner and more readable**.
