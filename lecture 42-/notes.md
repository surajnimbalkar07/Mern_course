
# JavaScript Prototype vs Instance Methods (Lecture 42)

A detailed explanation of **constructor, prototype, instance methods**, and **prototype methods** in JavaScript.

---

## **Contents**

1. [Constructor Definition](#constructor-definition)
2. [Prototype Definition](#prototype-definition)
3. [Instance Method](#1-instance-method)
4. [Prototype Method](#2-prototype-method)
5. [Key Points](#key-points)
6. [Summary](#summary)

---

## **Constructor Definition**

* A **constructor** is a special function used to create objects with the same properties and methods.
* Called using the `new` keyword.
* Example:

```js
function User(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}
```

* Each new object created with `new User(...)` will have its own properties.

---

## **Prototype Definition**

* **Prototype** is an object attached to every function in JavaScript.
* Properties or methods added to a constructor’s prototype are **shared by all instances** of that constructor.
* Example:

```js
User.prototype.printDetails = function() {
  console.log(`${this.name} is living in ${this.city}`);
};
```

---
## **1. Instance Method**

```js
function User(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.printDetails = function () {
    console.log(`${this.name} is living in ${this.city}`);
  };
}

const user1 = new User("Suraj", 21, "Pune");
const user2 = new User("Vaibhav", 22, "Mumbai");

console.log(user1.printDetails === user2.printDetails); // false
```

**Explanation:**

* Each time you create a new `User`, a **new function** is created for `printDetails`.
* `user1` and `user2` have **separate copies** of `printDetails`.
* This is **memory inefficient**.

---

## **2. Prototype Method**

```js
function User(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

User.prototype.printDetails = function () {
  console.log(`${this.name} is living in ${this.city}`);
};

const user1 = new User("Suraj", 21, "Pune");
const user2 = new User("Vaibhav", 22, "Mumbai");

console.log(user1.printDetails === user2.printDetails); // true
```

**Explanation:**

* `printDetails` is defined on `User.prototype`.
* `user1` and `user2` **share the same function**.
* Memory efficient because the function is **not copied per instance**.

---

## **Key Points**

* **Instance Method:** Defined inside constructor (`this.printDetails = ...`) → separate copy per object.
* **Prototype Method:** Defined on constructor prototype (`User.prototype.printDetails = ...`) → shared across instances.

> If a method is defined inside the constructor → instance method → separate copy per object.
> If a method is defined on the prototype → prototype method → shared across all instances.

---

## **Summary**

* Instance methods are **unique per object**.
* Prototype methods are **shared among all instances**.
* Classes in ES6 automatically place methods on the **prototype**, making them shared and memory-efficient.