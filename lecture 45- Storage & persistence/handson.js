

//check if browser has localstorage
function hasLocalStorage() {
  try {
    const test = "test";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (err) {
    return false;
  }
}
console.log(hasLocalStorage());

//autosave using localstorage

const area=document.getElementById("textarea")


area.value=localStorage.getItem("text")||""
area.addEventListener("input",()=>{
    localStorage.setItem("text",area.value)
})
//-----------------------------------------------------------
const key="key"
const array=[1,2,3,4]
const obj={
  name:"suraj"
}

//store array:
//covert to string
localStorage.setItem(key,array.join(""))
//convert to array again
console.log((localStorage.getItem(key).split("")));

//store object
localStorage.setItem(key,JSON.stringify(obj))

console.log((localStorage.getItem(key) ));

//retieve by parsing
console.log(JSON.parse(localStorage.getItem(key)));