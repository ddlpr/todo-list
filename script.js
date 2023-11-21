'use strict';
// State variables & elements |>
const button = document.getElementById("agregar");
const lista = document.getElementById('lista');

let tasks = JSON.parse(localStorage.tareas) || [];
// State variables & elements <|

const addFromStorage = function(task) {
  const liElement = document.createElement('li');
  liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');

  const spanElement = document.createElement('span');
  spanElement.textContent = task.description;

  const iElement = document.createElement('i');
  iElement.classList.add('bi', 'bi-trash3-fill');

  if (task.completed) spanElement.classList.add('completed');

  liElement.append(spanElement, iElement);
  lista.append(liElement);
};

const addTask = () => {
  //let task = document.getElementById('task').value;
  const task = {
    description: document.getElementById('task').value,
    completed: false
  };
  if (!task.description) {
    alert("Agregar tarea");
  } else {
    tasks.push(task);
    // const liElement = document.createElement('li');
    // liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');

    // const spanElement = document.createElement('span');
    // spanElement.textContent = task.description;

    // const iElement = document.createElement('i');
    // iElement.classList.add('bi', 'bi-trash3-fill');

    // liElement.append(spanElement, iElement);
    // lista.append(liElement);

    document.getElementById('task').value = '';
    localStorage.setItem('tareas', JSON.stringify(tasks));
    displayTasks(task);
  }
}

lista.addEventListener('click', function(e) {
  console.log(e.target.elements);
  if (e.target.tagName === 'LI') {
    e.target.querySelector('span').classList.toggle('completed');
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentNode.querySelector('span').classList.toggle('completed');
  }
})


// document.addEventListener('DOMContentLoaded', function() {
//   if (localStorage.getItem('tareas')) {
//     tasks = JSON.parse(localStorage.tareas);
//     tasks.forEach(function(task) {
//       addFromStorage(task);
//     });
//   }
// });

document.addEventListener('DOMContentLoaded', displayTasks);

function displayTasks() {
  lista.innerHTML = '';

  tasks.forEach(task => {
    const liElement = document.createElement('li');
    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');

    const spanElement = document.createElement('span');

    const iElement = document.createElement('i');
    iElement.classList.add('bi', 'bi-trash3-fill');
    console.log(task.completed)
    task.completed && spanElement.classList.add('completed');
    spanElement.textContent = task.description;
    liElement.append(spanElement, iElement);
    lista.append(liElement);
    // addFromStorage(task);
  });
}

button.onclick = addTask;
