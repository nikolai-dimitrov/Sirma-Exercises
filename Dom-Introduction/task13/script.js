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

function handleEditElementText(event) {
	console.log("edit text");
}
