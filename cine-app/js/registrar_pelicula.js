import { peliculaService } from '../service/peliculaService.js';

const form = document.getElementById('formPelicula');
const tabla = document.getElementById('tablaPeliculas');
const salaSelect = document.getElementById('sala_id');

const cargarSalas = async () => {
  const res = await fetch('https://dkznbykxyudompjdhuvr.supabase.co/rest/v1/salas?select=*', {
    headers: {
      apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrem5ieWt4eXVkb21wamRodXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTk5NDcsImV4cCI6MjA2MzQ5NTk0N30.hfClKsQzsDAg7EmeAeblj5NVStsbQ3-lltpRJqFW1OI',
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrem5ieWt4eXVkb21wamRodXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTk5NDcsImV4cCI6MjA2MzQ5NTk0N30.hfClKsQzsDAg7EmeAeblj5NVStsbQ3-lltpRJqFW1OI`
    }
  });
  const salas = await res.json();
  salas.forEach(sala => {
    const option = document.createElement('option');
    option.value = sala.id;
    option.textContent = sala.nombre;
    salaSelect.appendChild(option);
  });
};

const cargarPeliculas = async () => {
  const peliculas = await peliculaService.listarPeliculas();
  tabla.innerHTML = '';
  peliculas.forEach(p => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${p.titulo}</td>
      <td>${p.clasificacion}</td>
      <td>${p.duracion}</td>
      <td>${p.sala?.nombre || 'Sin sala'}</td>
      <td>
        <button onclick="editar(${p.id})">editar</button>
        <button onclick="eliminar(${p.id})">eliminar</button>
      </td>
    `;
    tabla.appendChild(fila);
  });
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('id').value;
  const pelicula = {
    titulo: document.getElementById('titulo').value,
    descripcion: document.getElementById('descripcion').value,
    clasificacion: document.getElementById('clasificacion').value,
    duracion: parseInt(document.getElementById('duracion').value),
    sala_id: parseInt(document.getElementById('sala_id').value)
  };

  if (id) {
    await peliculaService.actualizarPelicula(parseInt(id), pelicula);
  } else {
    await peliculaService.crearPelicula(pelicula);
  }

  form.reset();
  document.getElementById('id').value = '';
  cargarPeliculas();
});

window.editar = async (id) => {
  const [p] = await peliculaService.obtenerPelicula(id);
  document.getElementById('id').value = p.id;
  document.getElementById('titulo').value = p.titulo;
  document.getElementById('descripcion').value = p.descripcion;
  document.getElementById('clasificacion').value = p.clasificacion;
  document.getElementById('duracion').value = p.duracion;
  document.getElementById('sala_id').value = p.sala_id;
};

window.eliminar = async (id) => {
  if (confirm('¿Eliminar esta película?')) {
    await peliculaService.eliminarPelicula(id);
    cargarPeliculas();
  }
};

cargarSalas();
cargarPeliculas();
