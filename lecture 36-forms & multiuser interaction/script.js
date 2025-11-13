const outer=document.querySelector(".outer-div");
const inner=document.querySelector(".inner-div");
const h1Element=document.querySelector("h1")

outer.addEventListener("click",()=>{
    console.log("click outer div")
    outer.style.backgroundColor="green"
    
},true)
inner.addEventListener("click",()=>{
    console.log("click inner div")
    inner.style.backgroundColor="red"
},false)
h1Element.addEventListener("click",()=>{
    console.log("click h1 tag")
    h1Element.style.backgroundColor="brown"
},true)

// Capturing Phase (Event Capture)
// → The event starts from the top (window/document) and travels down to the target element.

// Target Phase
// → The event reaches the actual element that was clicked (the target).

// Bubbling Phase (Event Bubble)
// → The event then travels upward again from the target to the top (document)