const addTaskBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const createDeleteBtn = () => {
	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "X";
	deleteBtn.className = "delete-btn";
	return deleteBtn;
};
const createTask = () => {
	const inputValue = input.value;
	if (inputValue.trim().length == 0) {
		return;
	}

	const task = document.createElement("li");

	task.className = "todo-item";
	task.textContent = inputValue;

	const deleteBtn = createDeleteBtn();
	task.appendChild(deleteBtn);
	return task;
};

const handleAddTask = () => {
	const newTask = createTask();
	if (!newTask) {
		return;
	}
	todoList.appendChild(newTask);
};

const handleDeleteTask = () => {
	//
};
addTaskBtn.addEventListener("click", handleAddTask);
