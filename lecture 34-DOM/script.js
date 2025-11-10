console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.children);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

//selectors in dom
//1.querySelector
console.log(document.querySelector("div"));//select first appeared div
console.log(document.querySelectorAll("div"));//select all div
console.log(document.querySelector("#second-div"));//select element with given id just have to use # in case id and . in case of class

//By Id and ClassName
console.log(document.getElementById("second-div"));//select element with given id...written without # as we alredy calling it by getElementById
console.log(document.getElementsByClassName("first-div-child"));//same logic as above


let para = document.querySelector("p")
para.style.backgroundColor = "black";
para.style.color = "white";

//setAttributes

const imageElement = document.querySelector("img");
imageElement.setAttribute("src", "image2.jpg")
const buttonElement = document.querySelector("button");
buttonElement.setAttribute("data-user-id", "101")

const changePara = document.querySelector(".para")
changePara.innerHTML = "<strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, repellat!</strong>"

const changeText = document.querySelector(".text")
buttonElement.addEventListener("click", () => {
  changeText.textContent = "amet consectetur adipisicing elit. Perspiciatis, repellat!"
})

//remove specific class from multiple classes
const multiClass = document.querySelector("section")
let newArray = multiClass.className.split(" ")
console.log(newArray.splice(2, 1));
console.log(newArray.join(","))

const sectionElementCopy = document.querySelector("section");
console.log(sectionElementCopy.classList)
let toBeRemove = sectionElementCopy.classList.item(2);
sectionElementCopy.classList.remove(toBeRemove)
console.log(sectionElementCopy.classList)



//setAttribute usecase  :

// Use Case: Show / Hide Password:
// changing the input type from "password" to "text" when we click on "showpassword" and Vice Versa


let passwordField = document.getElementById("userPassword");
let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (passwordField.getAttribute("type") === "password") {
    passwordField.setAttribute("type", "text");
    toggleBtn.textContent = "Hide";
  } else {
    passwordField.setAttribute("type", "password");
    toggleBtn.textContent = "Show";
  }
});

