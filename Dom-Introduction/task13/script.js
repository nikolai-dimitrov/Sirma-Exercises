const itemsListElement = document.getElementById("items");
const inputTextElement = document.querySelector("input");
const buttonCreateElement = document.querySelector("button");

buttonCreateElement.addEventListener("click", handleCreateElement);
itemsListElement.addEventListener("click", handleEditElementText);
function handleCreateElement() {
	const inputValue = inputTextElement.value;

	if (inputValue.length == 0) {
		alert("Please enter text into input field!");
		return;
	}

	const listItemElement = document.createElement("li");
	listItemElement.textContent = inputValue;
	itemsListElement.appendChild(listItemElement);

	inputTextElement.value = "";
}

function handleSaveChanges(event) {
	const updatedValue =
		event.target.parentElement.querySelector("input").value;

	if (updatedValue.length == 0) {
		alert("Value can not be empty string");
		return;
	}

	const newLiElement = document.createElement("li");
	newLiElement.textContent = updatedValue;
	event.target.parentElement.replaceWith(newLiElement);
}

function handleEditElementText(event) {
	if (event.target.tagName != "LI") {
		return;
	}

	const inputFieldElement = document.createElement("input");
	const updateBtn = document.createElement("button");
	updateBtn.textContent = "Update";
	const editElementsWrapper = document.createElement("div");
	editElementsWrapper.appendChild(inputFieldElement);
	editElementsWrapper.appendChild(updateBtn);

	const currentListElementText = event.target.textContent;
	inputFieldElement.value = currentListElementText;
	event.target.replaceWith(editElementsWrapper);

	updateBtn.addEventListener("click", handleSaveChanges);
}
