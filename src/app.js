// app.js
document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
    const addTaskForm = document.getElementById('add-task-form');

    const fetchTodoList = async () => {
        const response = await fetch('/tasks');
        const tasks = await response.json();

        todoList.innerHTML = tasks.map(task => `
            <li>
                ${task.description}
                <button onclick="updateTask(${task.id})">Update</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </li>
        `).join('');
    };

    const addTask = async (event) => {
        event.preventDefault();

        const taskDescription = document.getElementById('task').value;

        await fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ description: taskDescription }),
        });

        fetchTodoList();
    };

    const updateTask = async (taskId) => {
        const taskDescription = prompt('Enter updated task description:');
        
        if (taskDescription !== null) {
            await fetch(`/tasks/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON               .stringify({ description: taskDescription }),
            });

            fetchTodoList();
        }
    };

    const deleteTask = async (taskId) => {
        const confirmDelete = confirm('Are you sure you want to delete this task?');

        if (confirmDelete) {
            await fetch(`/tasks/${taskId}`, {
                method: 'DELETE',
            });

            fetchTodoList();
        }
    };

    addTaskForm.addEventListener('submit', addTask);

    // Initial fetch
    fetchTodoList();
});

