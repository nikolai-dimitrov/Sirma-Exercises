const addTaskBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const resetInputBtn = document.getElementById("reset-btn");

// If there is currentId in localStorage it points to the last created task id
const getCurrentId = () => {
	let currentId = localStorage.getItem("currentId");
	if (!currentId) {
		return 0;
	}
	return Number(currentId);
};
let currentId = getCurrentId();

// If there are tasks saved in localStorage return them as array, if NOT set empty array as taskList in localStorage and return it.
const getTasksList = () => {
	let tasksList = JSON.parse(localStorage.getItem("tasksList"));
	if (!tasksList) {
		tasksList = [];
		localStorage.setItem("tasksList", JSON.stringify(tasksList));
	}
	return tasksList;
};
let tasksList = getTasksList();

const handleResetInputField = () => {
	input.value = "";
};

const handleDeleteTask = (e) => {
	e.target.parentElement.remove();
};

const createDeleteBtn = () => {
	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "X";
	deleteBtn.className = "delete-btn";

	deleteBtn.addEventListener("click", handleDeleteTask);
	return deleteBtn;
};
const createTask = (id, value) => {
	const inputValue = value ? value : input.value;
	if (inputValue.trim().length == 0) {
		return;
	}

	const task = document.createElement("li");
	if (!id && !value) {
		currentId += 1;
	}

	task.className = "todo-item";
	task.textContent = inputValue;
	task.id = id ? id : currentId;

	const deleteBtn = createDeleteBtn();
	task.appendChild(deleteBtn);
	return task;
};

const renderTasksList = () => {
	tasksList.map(({ id, task }) => {
		const createdTask = createTask(id, task);
		todoList.appendChild(createdTask);
	});
};
renderTasksList();

const handleAddTask = () => {
	const newTask = createTask();
	if (!newTask) {
		return;
	}

	todoList.appendChild(newTask);
	input.value = "";

	tasksList.push({ id: newTask.id, task: newTask.firstChild.textContent });
	localStorage.setItem("tasksList", JSON.stringify(tasksList));

	localStorage.setItem("currentId", currentId);
};

addTaskBtn.addEventListener("click", handleAddTask);
resetInputBtn.addEventListener("click", handleResetInputField);
