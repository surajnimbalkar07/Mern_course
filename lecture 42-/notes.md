# JavaScript Prototype vs Instance Methods

This README explains the difference between **instance methods** and **prototype methods** in JavaScript using examples from the previous discussion.

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
