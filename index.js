function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let listItem = document.createElement("li");

    listItem.innerHTML = `
        ${taskValue} 
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = ""; // Clear input after adding
}

function removeTask(button) {
    button.parentElement.remove();
}