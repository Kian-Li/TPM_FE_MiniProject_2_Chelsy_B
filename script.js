document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", () =>{
        const taskText = taskInput.value.trim();
        if(taskText !== ""){
            addTask(taskText);
            taskInput.value ="";
        }
    });
    function addTask(taskText){
        const item = document.createElement("li");
        item.className = "task_item";
    
        const divTaskText = document.createElement("div");
        divTaskText.className = "task_text";

        const checkbox = document.createElement("div");
        checkbox.className = "task_checkbox";
        checkbox.addEventListener("click", () => {
            checkbox.classList.toggle("checked");
            item.classList.toggle("checked");
        });

        const content = document.createElement("span");
        content.textContent = taskText;

        divTaskText.appendChild(checkbox);
        divTaskText.appendChild(content);

        const deleteClick = document.createElement("button");
        deleteClick.className = "task_delete";
        deleteClick.textContent = "X";
        deleteClick.addEventListener("click", () => {
            taskList.removeChild(item);
        });

        item.appendChild(divTaskText);
        item.appendChild(deleteClick);
        taskList.appendChild(item);

    }

});

