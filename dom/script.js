import checkComplete from "./COMPONENTES/checkComplete.js";
import deleteIcon from "./COMPONENTES/deleteIcon.js";

(() => {
    const btn = document.querySelector('[data-form-btn]');
    
    // Array de colores para las tareas
    const colors = ['#FFCDD2', '#C8E6C9', '#BBDEFB', '#FFF9C4', '#D1C4E9', '#FFECB3', '#B2EBF2'];
    let colorIndex = 0;

    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value.trim();
        if (value === '') return; // No agregar tareas vacías

        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');

        // Asignar un color de fondo a la tarea
        task.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length; // Cambiar al siguiente color

        input.value = '';

        const contTask = document.createElement('div');
        contTask.appendChild(checkComplete()); // Agregar el check al div

        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        contTask.appendChild(titleTask);

        task.appendChild(contTask);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    };

    btn.addEventListener('click', createTask);
})();

