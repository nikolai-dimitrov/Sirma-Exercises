document.getElementById("add-button").addEventListener("click", addTask);
function addTask() {
	console.log("adding task");
}

const input = document.getElementById("todo-input");
const taskTextContent = input.value.trim();
