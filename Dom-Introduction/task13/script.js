const itemsListElement = document.getElementById("items");
const inputTextElement = document.querySelector("input");
const buttonCreateElement = document.querySelector("button");

buttonCreateElement.addEventListener("click", handleCreateElement);
itemsListElement.addEventListener("click", handleEditElementText)
function handleCreateElement() {
	console.log('create element')
}

function handleEditElementText(event) {
	console.log('edit text')
}
