import { renderFila } from './dom.js';
export const cargarTareas = () => {
  fetch('http://localhost:3000/datos')
    .then(res => {
      if (!res.ok) throw new Error('Error al obtener tareas del servidor');
      return res.json();
    })
    .then(data => {
      const tbody = document.querySelector('.tbody');
      tbody.innerHTML = ''; // ⚠️ limpia la tabla antes de renderizar

      data.forEach(tarea => renderFila(tarea));
    })
    .catch(err => {
      console.error('❌ Error al cargar tareas:', err.message);
    });
};
