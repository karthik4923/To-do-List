document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  const searchInput = document.getElementById('search-input');

  todoForm.addEventListener('submit', addTodo);
  searchInput.addEventListener('input', filterTodos);

  function addTodo(event) {
    event.preventDefault();

    const newTodoText = todoInput.value.trim();
    if (newTodoText === '') return;

    const newTodo = document.createElement('li');
    newTodo.textContent = newTodoText;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '🗑️';
    deleteButton.addEventListener('click', () => newTodo.remove());

    newTodo.appendChild(deleteButton);
    newTodo.addEventListener('click', () => newTodo.classList.toggle('completed'));

    todoList.appendChild(newTodo);
    todoInput.value = '';
  }

  function filterTodos() {
    const searchTerm = searchInput.value.toLowerCase();
    const todos = todoList.querySelectorAll('li');

    todos.forEach(todo => {
      const match = todo.textContent.toLowerCase().includes(searchTerm);
      todo.style.display = match ? 'flex' : 'none';
    });
  }
});
