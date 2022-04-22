document.onload = initializeToDo();

function initializeToDo() {
	fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => response.json())
		.then(todos => {
			
		})
		.catch(error => addError(error));
}

function addToDoFromInput() {
	const newTodoInput = document.getElementById('newTodoInput');
	const newTodoLabel = newTodoInput.value;
	addToDo(newTodoLabel);
}

function addToDo(text) {
	const todoList = document.getElementById('todoList');
	const todoElement = document.createElement('li');
	todoElement.textContent = text;
	todoList.appendChild(todoElement);
	newTodoInput.value = '';
}

function addError(error) {
    console.error(error);
    const todoList = document.getElementById('todoList');
    const errorElement = document.createElement('p');
	errorElement.textContent = 'An error occurred';
    errorElement.style.color = 'red';
	todoList.appendChild(errorElement);
}