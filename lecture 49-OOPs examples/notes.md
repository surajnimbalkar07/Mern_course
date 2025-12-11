# 📘 **README – OOP Concepts Explained Using Provided Code**
 
The concepts covered are:

1. **Inheritance**
2. **Method Overriding**
3. **Constructor**
4. **super()**
5. **Encapsulation**
6. **Composition**

---

# 🔹 **1. Inheritance**

Inheritance allows one class to acquire the properties and methods of another class using the `extends` keyword.

### **Code Example:**

```js
class Vehicle {
  start() {
    console.log("Car is starting");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car is starting");
  }
}

class ElectricCar extends Car {
  start() {
    console.log("ElectricCar is starting");
  }
}
```

### **Explanation:**

* `Car` **inherits** from `Vehicle`.
* `ElectricCar` **inherits** from `Car`.
* This forms a chain of inheritance.

---

# 🔹 **2. Method Overriding**

Method overriding occurs when a child class **redefines the same method** present in the parent class.

### **Code Example:**

```js
class ElectricCar extends Car {
  start() {
    console.log("ElectricCar is starting");
  }
}
```

### **Explanation:**

* `start()` exists in all three classes.
* Each class provides its **own version** of `start()`.
* This is method overriding.

---

# 🔹 **3. Constructor**

A constructor initializes object properties when an object is created.

### **Code Example:**

```js
class Employee {
  constructor(yrsOfExp) {
    this.yrsOfExp = yrsOfExp;
  }
}
```

### **Explanation:**

* When `new Employee(3)` is called, the constructor sets `yrsOfExp` to `3`.

---

# 🔹 **4. super()**

`super()` is used in child classes to call the parent class constructor.

### **Code Example:**

```js
class SalesEmployee extends Employee {
  constructor(yrsOfExp) {
    super(yrsOfExp);
  }
}
```

### **Explanation:**

* `super(yrsOfExp)` calls the parent class constructor.
* Without `super()`, child class cannot use `this`.

---

# 🔹 **5. Encapsulation**

Encapsulation hides internal logic and exposes only what is necessary.
JavaScript supports private methods using `#`.

### **Code Example:**

```js
#calculateMarks() {
  // private logic
}

get marks() {
  return this.#calculateMarks();
}
```

### **Explanation:**

* `#calculateMarks()` is completely **private**.
* It cannot be accessed outside the class.
* Only the getter `marks` exposes the calculated result.

---

# 🔹 **6. Composition (HAS-A Relationship)**

Composition means a class contains objects of other classes.

### **Code Example:**

```js
class Person {
  constructor(aadharNumber, personalDetails, educationalDetails) {
    this.personalDetails = new PersonalDetails(personalDetails);
    this.educationalDetails = new EducationalDetails(educationalDetails);
  }
}
```

### **Explanation:**

* A `Person` **has a** `PersonalDetails`
* A `Person` **has an** `EducationalDetails`
* This is NOT inheritance—this is composition.

---

# ✔ **Summary**

| Concept           | What Your Code Demonstrates                                  |
| ----------------- | ------------------------------------------------------------ |
| Inheritance       | Classes extending other classes (`Car extends Vehicle`)      |
| Method Overriding | Same method redefined in child classes                       |
| Constructor       | Initializing object data                                     |
| super()           | Calling parent constructor in derived classes                |
| Encapsulation     | Private method + getter in `Student` class                   |
| Composition       | `Person` containing `PersonalDetails` & `EducationalDetails` |

---
