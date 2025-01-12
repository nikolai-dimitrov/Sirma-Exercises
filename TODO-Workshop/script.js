import { getCurrentId, getTasksList } from "./localStorageManager.js";

const addTaskBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const resetInputBtn = document.getElementById("reset-btn");

let currentId = getCurrentId();
let tasksList = getTasksList();

const handleResetInputField = () => {
	input.value = "";
};

const handleDeleteTask = (e) => {
	const taskId = e.target.parentElement.id;
	e.target.parentElement.remove();

	const localStorageTasksList = getTasksList().filter(
		({ id, task }) => id != taskId
	);
	localStorage.setItem("tasksList", JSON.stringify(localStorageTasksList));

	tasksList = localStorageTasksList;
};

const createDeleteBtn = () => {
	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "X";
	deleteBtn.className = "delete-btn";

	deleteBtn.addEventListener("click", handleDeleteTask);
	return deleteBtn;
};

// const createUpdateBtn = () => {
// 	const updateBtn = document.createElement("button");
// 	updateBtn.textContent = "update";
// 	updateBtn.className = "update-btn";

// 	// updateBtn.addEventListener("click", handleUpdateTask);
// 	return updateBtn;
// };
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

	// const updateBtn = createUpdateBtn();
	const deleteBtn = createDeleteBtn();

	// task.appendChild(updateBtn);
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
