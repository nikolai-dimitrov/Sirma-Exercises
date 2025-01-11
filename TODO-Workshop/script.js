const addTaskBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const createTask = () => {
	const inputValue = input.value;
	if (inputValue.trim().length == 0) {
		return;
	}

	const task = document.createElement("li");

	task.className = "todo-item";
	task.textContent = inputValue;

	return task;
};
const handleAddTask = () => {
	const newTask = createTask();
	if (!newTask) {
		return;
	}
	todoList.appendChild(newTask);
};

addTaskBtn.addEventListener("click", handleAddTask);
