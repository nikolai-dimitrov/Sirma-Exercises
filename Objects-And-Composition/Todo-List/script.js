document.getElementById("add-button").addEventListener("click", addTask);
document.getElementById("todo-list").addEventListener("click", deleteTask);
function addTask() {
	const input = document.getElementById("todo-input");

	let taskElement = document.createElement("li");
	let taskDeleteBtn = document.createElement("button");
	let todoList = document.getElementById("todo-list");

	const taskTextContent = input.value.trim();
    if (taskTextContent.length == 0) {
        return
    }
	taskElement.textContent = taskTextContent;
	todoList.appendChild(taskElement);

	taskDeleteBtn.textContent = "Delete";
	taskElement.appendChild(taskDeleteBtn);
}

// function deleteTask() {
// 	console.log("Delete");
// }
// todo-list
