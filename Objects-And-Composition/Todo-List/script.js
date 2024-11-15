document.getElementById("add-button").addEventListener("click", addTask);
document.getElementById("todo-list").addEventListener("click", deleteTask);
// Use event delegation instead of adding individual event listener for every delete task button
function addTask() {
	const input = document.getElementById("todo-input");

	const taskElement = document.createElement("li");
	const taskDeleteBtn = document.createElement("button");
	const todoList = document.getElementById("todo-list");

	const taskTextContent = input.value.trim();
	if (taskTextContent.length == 0) {
		return;
	}

	taskElement.textContent = taskTextContent;
	todoList.appendChild(taskElement);

	taskDeleteBtn.textContent = "Delete";
	taskElement.appendChild(taskDeleteBtn);
}

function deleteTask(event) {
	if (event.target.tagName == "BUTTON") {
		const taskElement = event.target.parentElement;
		taskElement.remove();
	}
}
