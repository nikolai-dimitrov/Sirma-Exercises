const addTaskBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const resetInputBtn = document.getElementById("reset-btn");

const handleResetInputField = () => {
	input.value = "";
};

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
	input.value = "";
};

const handleDeleteTask = () => {
	//
};

addTaskBtn.addEventListener("click", handleAddTask);
resetInputBtn.addEventListener("click", handleResetInputField);
