const h3Element = document.createElement("h3");
h3Element.textContent = "Hi, I'm a H3 element";
const div1 = document.querySelector("div");

div1.appendChild(h3Element)

//Note: if we are appending an new created element that already 
//present in DOM then the before element that present will be cut and then paste at end
//of the element were we are appending

// const h4Element=document.createElement("h3");
// h4Element.textContent="Hi, I'm a H3 element";
// div1.append(h3Element,h4Element)


//events in dom:

//mouseover--->hover
//mouseup--->
//mousedown--->
const h1Element = document.querySelector("h1");
const para1 = document.querySelector("p");
para1.addEventListener("click", () => {
    console.log("you clicked para")
})
//have two arguments first is event that we have to perform 
//second is function that will executes when the event happens


//removing an element from DOM
para1.addEventListener("click", () => {
   para1.remove()
});


//mouseover
para1.addEventListener("mouseover", () => {
    para1.style.color="brown"
});

//mouseup
h1Element.addEventListener("mouseup", () => {
    h1Element.style.color="red"
});

// mousedown
h3Element.addEventListener("mousedown", () => {
    h3Element.style.backgroundColor="black"
     h3Element.style.color="white"
});

//keydown
document.addEventListener("keydown", () => {
    h3Element.style.border="5px solid red"
    
});


