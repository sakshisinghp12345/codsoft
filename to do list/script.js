document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(listItem);

            taskInput.value = "";
            taskInput.focus();

            listItem.querySelector(".delete-button").addEventListener("click", function () {
                taskList.removeChild(listItem);
            });
        }
    });
});