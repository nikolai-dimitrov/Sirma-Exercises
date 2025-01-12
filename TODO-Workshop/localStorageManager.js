// If there is currentId in localStorage it points to the last created task id
export const getCurrentId = () => {
	let currentId = localStorage.getItem("currentId");
	if (!currentId) {
		return 0;
	}
	return Number(currentId);
};

// If there are tasks saved in localStorage return them as array, if NOT set empty array as taskList in localStorage and return it.
export const getTasksList = () => {
	let tasksList = JSON.parse(localStorage.getItem("tasksList"));
	if (!tasksList) {
		tasksList = [];
		localStorage.setItem("tasksList", JSON.stringify(tasksList));
	}
	return tasksList;
};
