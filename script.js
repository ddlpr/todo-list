// State variables & elements |>
const button = document.getElementById("agregar");
const addFromStorage = function(task) {
  let lista = document.getElementById('lista');
  let li = document.createElement('li');
  li.textContent = task;
  li.onclick = function() {
    li.classList.toggle('tachado');
  }

  lista.append(li);
}
// State variables & elements <|

const addTask = () => {
  let task = document.getElementById('task').value;
  if (!task) {
    alert("Agregar tarea");
  } else {
    tasks.push(task);

    let lista = document.getElementById('lista');
    let li = document.createElement('li');
    li.textContent = task;
    li.onclick = function() {
      li.classList.toggle('tachado');
    }

    lista.append(li);
    document.getElementById('task').value = '';
    localStorage.setItem('tareas', JSON.stringify(tasks));
    console.log(localStorage);
  }
}

let tasks = [];

document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('tareas')) {
    tasks = JSON.parse(localStorage.tareas);
    tasks.forEach(function (task) {
      addFromStorage(task);
    });
  }
});

button.onclick = addTask;
localStorage.removeItem('tareas');
