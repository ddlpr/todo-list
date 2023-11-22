'use strict';
// State variables & elements |>
const button = document.getElementById("agregar");
const lista = document.getElementById('lista');

let tasks = JSON.parse(localStorage.tareas) || [];
// State variables & elements <|

const addTask = () => {
  const task = {
    description: document.getElementById('task').value,
    completed: false
  };
  if (!task.description) {
    alert("Agregar tarea");
  } else {
    tasks.push(task);
    document.getElementById('task').value = '';
    localStorage.setItem('tareas', JSON.stringify(tasks));
    displayTasks(task);
  }
}

document.addEventListener('DOMContentLoaded', displayTasks);

function displayTasks() {
  lista.innerHTML = '';

  tasks.forEach(task => {
    const liElement = document.createElement('li');
    const spanElement = document.createElement('span');
    const iElement = document.createElement('i');

    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    iElement.classList.add('bi', 'bi-trash3-fill', 'delete');
    task.completed && spanElement.classList.add('completed');
    spanElement.textContent = task.description;
    liElement.append(spanElement, iElement);
    lista.append(liElement);

    liElement.addEventListener('click', e => {
      if (e.target.tagName === 'LI') {
        task.completed = task.completed ? false : true;
        e.target.querySelector('span').classList.toggle('completed');
      } else if (e.target.tagName === 'SPAN') {
        task.completed = task.completed ? false : true;
        e.target.parentNode.querySelector('span').classList.toggle('completed');
      }
      localStorage.setItem('tareas', JSON.stringify(tasks));
    });

    iElement.addEventListener('click', () => {
      tasks = tasks.filter(t => t != task);
      liElement.remove();
    });
  });
}

button.onclick = addTask;
