document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', addTodo);

    function addTodo(event) {
        event.preventDefault();

        const newTodoText = todoInput.value;
        if (newTodoText === '') return;

        const newTodo = document.createElement('li');
        newTodo.textContent = newTodoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTodo);

        newTodo.appendChild(deleteButton);
        newTodo.addEventListener('click', toggleComplete);
        todoList.appendChild(newTodo);

        todoInput.value = '';
    }

    function deleteTodo() {
        this.parentElement.remove();
    }

    function toggleComplete() {
        this.classList.toggle('completed');
    }
});