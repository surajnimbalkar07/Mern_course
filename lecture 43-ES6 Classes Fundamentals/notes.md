# Lecture 43 - JavaScript Classes, Getters, Setters, Static Methods, and Private Properties

A beginner-friendly guide on **constructor functions vs classes, getters & setters, static methods, and private properties** in JavaScript.

---

## **Contents**

1. [Constructor Functions vs Classes](#constructor-functions-vs-classes)
2. [Prototype Methods](#prototype-methods)
3. [JavaScript Classes](#javascript-classes)
4. [Attendance Class Example](#attendance-class-example)
5. [Getters and Setters](#getters-and-setters)
6. [Static Methods (Super Simple)](#static-methods-super-simple)
7. [Private Properties (Simple Theory)](#private-properties-simple-theory)

---

## **Constructor Functions vs Classes**

**Constructor Functions:** Old way to create objects with shared behavior via prototypes.

```js
function Car(name, model){
    this.name = name;
    this.model = model;
    this.speed = 0;
}

Car.prototype.isRunning = function(){
    this.speed > 0 ? console.log("Running") : console.log("Not running");
}
```

**Why Classes?**

* Cleaner syntax.
* Groups constructor and methods together.
* Under the hood, class methods are stored on prototype.
* Classes cannot be hoisted; must be declared before use.

---

## **Prototype Methods**

Methods added to a constructor function using `.prototype` are shared among instances.

```js
Car.prototype.changeSpeed = function(newSpeed){
    this.speed = newSpeed;
}
```

* Memory-efficient since all instances share the same function.

---

## **JavaScript Classes**

Modern syntax for object-oriented programming.

```js
class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
        this.speed = 0;
    }
    isRunning() {
        this.speed > 0 ? console.log("Running") : console.log("Not running");
    }
    changeSpeed(newSpeed) {
        this.speed = newSpeed;
    }
}

const tata = new Car("Tata", "Harrier");
```

* Methods in classes are automatically on the prototype.

---

## **Attendance Class Example**

Encapsulates attendance logic:

```js
class Attendance {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        this.days = 0;
        this.total = 0;
    }
    isPresent() { this.days++; this.total++; }
    isAbsent() { this.total++; }
    totalAttendance() {
        console.log((this.days / this.total) * 100);
    }
}
```

* **Takeaway:** Class groups data and methods logically.

---

## **JavaScript Classes: Getters and Setters**

explanation of **getters** and **setters** in JavaScript classes.

### **1. The Class**

```js
class Student{
    constructor({id,name,dob,grade}){
        this.id=id;
        this.name=name;
        this._dob=dob;   // underscore _dob → indicates we don’t want it accessed/changed directly
        this.grade=grade;
        this._marks=0;   // private-ish property for marks
    }
```

* `_dob` and `_marks` are **internal properties**.
* The underscore `_` is a convention to show “don’t access this directly”.

### **2. Getter for dob**

```js
get dob(){
    return this._dob
}
```

* `dob` is now a **read-only property**.
* You can do `mukesh.dob` to get the value.
* But you **cannot change it directly**: `mukesh.dob = "21-21-1999"` won’t work.

**Why we use getters:**

* Protect important data (like DOB) from being changed accidentally.
* Provides controlled **access** to private/internal properties.

### **3. Setter for marks**

```js
set marks(newMarks){
    this._marks = newMarks
}
```

* `marks` is a **controlled way to update `_marks`**.
* You can do `mukesh.marks = 30` to set it.
* Setters can also **validate or transform the value** before saving it.

**Why we use setters:**

* Protects internal data.
* You can **check the value** before saving it (like making sure marks are not negative).
* Encapsulation: keeps object’s internal state safe.

### **4. Example usage**

```js
const mukesh = new Student({id:"1234", name:"mukesh", dob:"24-12-1999", grade:10});

mukesh.dob = "21-21-1999";  // ❌ Won’t change _dob because dob is read-only
console.log(mukesh.dob);    // ✅ Prints original DOB: 24-12-1999

mukesh.marks = 30;           // ✅ Updates _marks safely using setter
```

### **5. Summary**

* **Getter** → read-only access to internal data.
* **Setter** → controlled update to internal data.
* **Goal** → protect your object’s internal state and promote **encapsulation**.

---

## **Static Methods**

A beginner-friendly explanation of **static methods** in JavaScript classes.

### **What they are**

A **static method** is a function that belongs to the **class**, not to the objects you create from it.

### **Why we use them**

1. To do something related to the **class itself**, not a single object.
2. To create **special objects** or **helper functions** without needing an instance.

### **Example in words**

* Imagine a `User` class. You want a **guest user**.
* You don’t need a normal user first to make a guest.
* So you use `User.guest()` → directly from the class.

### **Key point**

You **call it on the class**, not on an object.

---

## **Private Properties **

A beginner-friendly explanation of **private properties** in JavaScript classes.

### **What they are**

Private properties are variables inside a class that **cannot be accessed from outside the class**.
They are **only accessible within the class**.
In JavaScript, we define them with `#` before the property name:

```js
class Bank {
    #pin = 1234; // private property
}
```

### **Why we use them**

1. To **protect sensitive data**, like passwords or PINs.
2. To **prevent accidental changes** from outside the class.
3. To **enforce encapsulation**, keeping data and behavior safe inside the class.

### **How to access them**

Only through **methods inside the class**:

```js
class Bank {
    #pin = 1234;
    checkPin(userPin) {
        return userPin === this.#pin;
    }
}

const bank = new Bank();
console.log(bank.checkPin(1234)); // true
console.log(bank.#pin); // ❌ Error, cannot access
```

### **Key Points**

* **Cannot access private properties from outside.**
* **Encourages safe coding** and prevents misuse of sensitive data.
