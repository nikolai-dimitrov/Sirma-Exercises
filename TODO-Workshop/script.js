const addTaskBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const resetInputBtn = document.getElementById("reset-btn");

const getCurrentId = () => {
	let currentId = localStorage.getItem("currentId");
	if (!currentId) {
		return 0;
	}
	return Number(currentId);
};

let currentId = getCurrentId();

const handleResetInputField = () => {
	input.value = "";
};

const createDeleteBtn = () => {
	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "X";
	deleteBtn.className = "delete-btn";

	deleteBtn.addEventListener("click", handleDeleteTask);
	return deleteBtn;
};
const createTask = () => {
	const inputValue = input.value;
	if (inputValue.trim().length == 0) {
		return;
	}

	const task = document.createElement("li");
	currentId += 1;

	task.className = "todo-item";
	task.textContent = inputValue;
	task.id = currentId;

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
	input.value = "";

	// localStorage.setItem(newTask.id, newTask.textContent);
	localStorage.setItem("currentId", currentId);
};

const handleDeleteTask = (e) => {
	e.target.parentElement.remove();
};

addTaskBtn.addEventListener("click", handleAddTask);
resetInputBtn.addEventListener("click", handleResetInputField);
