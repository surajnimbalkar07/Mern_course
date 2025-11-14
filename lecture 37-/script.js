const btn = document.querySelector("button");
const todos = document.querySelector("#todo-items");
const input = document.querySelector("input");

todos.innerHTML = "";

// Add Todo
btn.addEventListener("click", (e) => {
    e.preventDefault();

    const inputValue = input.value.trim();
    if(!inputValue)return

    // add Todo
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-items");

    todoItem.innerHTML = `
        <p>${inputValue}</p>
        <input class="edit-input" type="text" style="display:none;" />
        <div class="todo-buttons">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    todos.append(todoItem);
    input.value = "";


 const deleteBtn = todoItem.querySelector(".delete-btn");
 const editBtn = todoItem.querySelector(".edit-btn");
       
    //edit,save
    editBtn.addEventListener("click", () => {
        const pTag = todoItem.querySelector("p");
        const editedInput = todoItem.querySelector(".edit-input");
        
       if(editBtn.textContent==="Edit"){
        editedInput.style.display="block";
        editedInput.style.margin="10px";
        pTag.style.display="none";
        editedInput.value=pTag.textContent
        editBtn.textContent="Save"

       }else{
        editedInput.style.display="none";
        pTag.style.display="block";
        pTag.textContent=editedInput.value
        editBtn.textContent="Edit"
       }
    });

    // delete
    deleteBtn.addEventListener("click", () => {
        todoItem.remove();
    });
});
