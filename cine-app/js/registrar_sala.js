import { salaService } from '../service/salaService.js';

const form = document.getElementById('formSala');
const tabla = document.getElementById('tablaSalas');

const cargarSalas = async () => {
  const salas = await salaService.listarSalas();
  tabla.innerHTML = '';
  salas.forEach(s => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${s.nombre}</td>
      <td>${s.capacidad}</td>
      <td>
        <button onclick="editar(${s.id})">editar</button>
        <button onclick="eliminar(${s.id})">elimniar</button>
      </td>
    `;
    tabla.appendChild(fila);
  });
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('id').value;
  const sala = {
    nombre: document.getElementById('nombre').value,
    capacidad: parseInt(document.getElementById('capacidad').value)
  };

  if (id) {
    await salaService.actualizarSala(parseInt(id), sala);
  } else {
    await salaService.crearSala(sala);
  }

  form.reset();
  document.getElementById('id').value = '';
  cargarSalas();
});

window.editar = async (id) => {
  const [s] = await salaService.obtenerSala(id);
  document.getElementById('id').value = s.id;
  document.getElementById('nombre').value = s.nombre;
  document.getElementById('capacidad').value = s.capacidad;
};

window.eliminar = async (id) => {
  if (confirm('¿Eliminar esta sala?')) {
    await salaService.eliminarSala(id);
    cargarSalas();
  }
};

cargarSalas();
