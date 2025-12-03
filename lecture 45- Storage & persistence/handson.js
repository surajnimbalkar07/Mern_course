

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



area.addEventListener("input",()=>{
    localStorage.setItem("text",area.value)
})

area.value=localStorage.getItem("text")||""