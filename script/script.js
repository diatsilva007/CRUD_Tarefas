let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;

    if (task) {
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    } else {
        alert('Por favor, digite uma tarefa.');
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const row = document.createElement('tr');

        const cellTask = document.createElement('td');
        cellTask.textContent = task;

        const cellActions = document.createElement('td');
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('btn', 'edit');
        editButton.onclick = () => editTask(index);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('btn', 'delete');
        deleteButton.onclick = () => deleteTask(index);

        cellActions.appendChild(editButton);
        cellActions.appendChild(deleteButton);
        
        row.appendChild(cellTask);
        row.appendChild(cellActions);
        taskList.appendChild(row);
    });
}

function editTask(index) {
    const newTask = prompt('Editar tarefa:', tasks[index]);
    if (newTask) {
        tasks[index] = newTask;
        renderTasks();
    }
}

function deleteTask(index) {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}
