const input = document.querySelector('[data-input-tarea]');
const btnAdd = document.querySelector('[data-button-add]');
const btnTachar = document.querySelector('[data-button-tachar]');
const btnContar = document.querySelector('[data-button-contar]');
const taskList = document.querySelector('[data-task-list]');
const output = document.querySelector('[data-output]');

let contadorID = 1;


btnAdd.addEventListener('click', () => {
    const texto = input.value.trim();

    if (texto === '') {
        alert("Por favor ingresa una tarea.");
        return;
    }

    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = texto;
    nuevaTarea.classList.add('task');
    nuevaTarea.dataset.id = contadorID++;
    taskList.appendChild(nuevaTarea);
    input.value = '';
});

// esto modifica el relleno
taskList.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('relleno');
    }
});

taskList.addEventListener('dblclick',e =>{
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});

btnContar.addEventListener('click', () => {
    const total = taskList.querySelectorAll('.task').length;
    output.innerHTML = `Total de tareas: ${total}`;
});

btnTachar.addEventListener('click', () => {
    const items = taskList.querySelectorAll('.task');
    if (items.length > 0) {
        items[items.length - 1].classList.add('tachado');
    }
});


