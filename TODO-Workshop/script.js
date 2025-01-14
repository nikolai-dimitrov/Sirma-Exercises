import { getCurrentId, getTasksList } from "./localStorageManager.js";

const addTaskBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const resetInputBtn = document.getElementById("reset-btn");

let currentId = getCurrentId();
let tasksList = getTasksList();
const createHtmlElement = (type, content, className) => {
	const newElement = document.createElement(type);
	newElement.textContent = content;

	if (className) {
		newElement.className = className;
	}
	return newElement;
};
const handleResetInputField = () => {
	input.value = "";
};

const handleUpdateTask = (e) => {
	const currentTaskHtmlElement = e.target.parentElement.parentElement;
	const taskId = currentTaskHtmlElement.id;
	const taskName = currentTaskHtmlElement.firstChild.textContent;
	const newTaskName = prompt(`You are updating: ${taskName}`);

	if (newTaskName == null || newTaskName.trim() == "") {
		return;
	}

	const updatedTasksList = getTasksList().map((taskObject) => {
		if (taskObject.id == taskId) {
			taskObject.task = newTaskName;
			return taskObject;
		}
		return taskObject;
	});

	localStorage.setItem("tasksList", JSON.stringify(updatedTasksList));
	tasksList = updatedTasksList;

	currentTaskHtmlElement.firstChild.textContent = newTaskName;
};

const handleDeleteTask = (e) => {
	const taskId = e.target.parentElement.parentElement.id;
	e.target.parentElement.parentElement.remove();

	const localStorageTasksList = getTasksList().filter(
		({ id, task }) => id != taskId
	);
	localStorage.setItem("tasksList", JSON.stringify(localStorageTasksList));

	tasksList = localStorageTasksList;
};

const createDeleteBtn = () => {
	const deleteBtn = createHtmlElement("button", "X", "delete-btn");

	deleteBtn.addEventListener("click", handleDeleteTask);
	return deleteBtn;
};

const createUpdateBtn = () => {
	const updateBtn = createHtmlElement("button", "update", "update-btn");

	updateBtn.addEventListener("click", handleUpdateTask);
	return updateBtn;
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

	const buttonContainer = document.createElement("div");

	const updateBtn = createUpdateBtn();
	const deleteBtn = createDeleteBtn();

	buttonContainer.appendChild(updateBtn);
	buttonContainer.appendChild(deleteBtn);

	task.appendChild(buttonContainer);

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
