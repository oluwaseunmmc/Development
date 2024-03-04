// get variables //

const err = document.querySelector(".err");
const inputTask = document.getElementById("input-task");
const addTaskBtn = document.querySelector(".add-task");
const inputSearch = document.getElementById("search-input");
const taskList = document.querySelector(".task-list");
const clearAllBtn = document.querySelector(".clear-all");


// add a task //
// Click on add task//
addTaskBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (inputTask.value !== "") {
        // get our input value and trim the white spaces //
        const taskText = inputTask.value.trim();
        // console.log(taskText)
        // create a new li//
        const newLi = document.createElement("li");
        newLi.className = "task";
        // create an input field --> type of text, disabled, class name of disabled text//
        const taskInput = document.createElement("input");
        taskInput.type = "text";
        taskInput.disabled = true;
        taskInput.className= "disable-text";
        // put the input trimmed value into the disabled task input//
        taskInput.value = taskText;
        // put the input field that contain the task into the new li//
        newLi.appendChild(taskInput);
        // create the delete btn and ---> class of delete btn// text of Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "DELETE";
        deleteBtn.className = "delete-btn";
        // put the delete btn into the li//
        newLi.appendChild(deleteBtn);
        // create an edit btn with class of edit btn//create an text of Edit button
        const editBtn = document.createElement("button");
        editBtn.innerText = "EDIT";
        editBtn.className = "edit-btn";
        // put the edit btn into the li //
        newLi.appendChild(editBtn);
        // put the new li that contains all the information into the task list//
        taskList.appendChild(newLi)
        // clear the input task 
        inputTask.value = "";  
   } else {
        err.style.display = "block";
        setTimeout(() => {
            err.style.display = "none";
        }, 2000); 
   }

});

// Delete a Task //
// onclick on the parent //
taskList.addEventListener('click', (e) => {
    e.preventDefault();
    
    // click if the target is a delete button //
  if (e.target.classList.contains("delete-btn")) {
     console.log(e.target.parentElement);
     
    // get the parent of the delete button //
    // remove the parent //
    e.target.parentElement.remove(); 
  }
});

//edit a task//
taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
      console.log(e.target.parentElement);
      const input = e.target.parentElement.querySelector('input[type="text"]');
      input.disabled = !input.disabled;
      if (!input.disabled) {
        input.focus();
      }
    }
});  

document.querySelectorAll('.disable-text').forEach(input => {
  input.disabled = true;
});

// clear all task //
function clearAllTasks() {
  // Get a reference to the task list
  const taskList = document.querySelector(".task-list");

  // Remove all child elements (tasks) from the task list
  taskList.innerHTML = "";
}

// Now you can call this function whenever you want to clear all tasks
// For example, you can attach it to the "Clear All" button
const clearallBtn = document.querySelector(".clear-all");
clearAllBtn.addEventListener("click", clearAllTasks);

//search for a task
//! add a keyup event on the search input field
inputSearch.addEventListener("keyup", (e) => {
      e.preventDefault();
      // console.log("Kabo");
  //! get the value from the search input
  // turn the search value or text to lowercase
  const searchText = inputSearch.value.trim().toLowerCase();
  //! get all the Li or task
  const taskList = document.querySelectorAll(".task");
  //! // Loop through the task list
  taskList.forEach(taskList => {
    
    
    // Get the value of the input field within the task list
  
    const taskTextList = taskList.querySelector(".disable-text").value.toLowerCase();
    //! check if the search word is in the looped input filled 
    if (taskTextList.indexOf(searchText) !== -1) {
      //! display it block or display it none
      taskList.style.display = "block";
    } 
    else {
      taskList.style.display = "none";
    }
  });
});
