import { addData } from './add.js';
import { cargarTareas } from './get.js';

document.addEventListener('DOMContentLoaded', () => {
  cargarTareas(); // 🔁 Carga todas las tareas guardadas del servidor

  // 🔘 Botón "Agregar" (el único que está en el formulario de arriba)
  document.querySelector('.btn-add').addEventListener('click', addData);
});
