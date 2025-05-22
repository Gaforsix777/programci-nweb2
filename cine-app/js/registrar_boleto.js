import { boletoService } from '../service/boletoService.js';

const form = document.getElementById('formBoleto');
const tabla = document.getElementById('tablaBoletos');
const clienteSelect = document.getElementById('cliente_id');
const peliculaSelect = document.getElementById('pelicula_id');

const cargarClientes = async () => {
  const res = await fetch('https://dkznbykxyudompjdhuvr.supabase.co/rest/v1/clientes?select=*', {
    headers: {
      apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrem5ieWt4eXVkb21wamRodXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTk5NDcsImV4cCI6MjA2MzQ5NTk0N30.hfClKsQzsDAg7EmeAeblj5NVStsbQ3-lltpRJqFW1OI',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrem5ieWt4eXVkb21wamRodXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTk5NDcsImV4cCI6MjA2MzQ5NTk0N30.hfClKsQzsDAg7EmeAeblj5NVStsbQ3-lltpRJqFW1OI'
    }
  });
  const clientes = await res.json();
  clientes.forEach(cli => {
    const option = document.createElement('option');
    option.value = cli.id;
    option.textContent = cli.nombre;
    clienteSelect.appendChild(option);
  });
};

const cargarPeliculas = async () => {
  const res = await fetch('https://dkznbykxyudompjdhuvr.supabase.co/rest/v1/peliculas?select=*', {
    headers: {
      apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrem5ieWt4eXVkb21wamRodXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTk5NDcsImV4cCI6MjA2MzQ5NTk0N30.hfClKsQzsDAg7EmeAeblj5NVStsbQ3-lltpRJqFW1OI',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrem5ieWt4eXVkb21wamRodXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTk5NDcsImV4cCI6MjA2MzQ5NTk0N30.hfClKsQzsDAg7EmeAeblj5NVStsbQ3-lltpRJqFW1OI'
    }
  });
  const peliculas = await res.json();
  peliculas.forEach(p => {
    const option = document.createElement('option');
    option.value = p.id;
    option.textContent = p.titulo;
    peliculaSelect.appendChild(option);
  });
};

const cargarBoletos = async () => {
  const boletos = await boletoService.listarBoletos();
  tabla.innerHTML = '';
  boletos.forEach(b => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${b.cliente?.nombre || '-'}</td>
      <td>${b.pelicula?.titulo || '-'}</td>
      <td>${b.fecha}</td>
      <td>${b.hora}</td>
      <td>${b.asiento}</td>
      <td>${b.precio}</td>
      <td>
        <button onclick="editar(${b.id})">editar</button>
        <button onclick="eliminar(${b.id})">aliminar</button>
      </td>
    `;
    tabla.appendChild(fila);
  });
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('id').value;
  const boleto = {
    cliente_id: parseInt(document.getElementById('cliente_id').value),
    pelicula_id: parseInt(document.getElementById('pelicula_id').value),
    fecha: document.getElementById('fecha').value,
    hora: document.getElementById('hora').value,
    asiento: document.getElementById('asiento').value,
    precio: parseFloat(document.getElementById('precio').value)
  };

  if (id) {
    await boletoService.actualizarBoleto(parseInt(id), boleto);
  } else {
    await boletoService.crearBoleto(boleto);
  }

  form.reset();
  document.getElementById('id').value = '';
  cargarBoletos();
});

window.editar = async (id) => {
  const [b] = await boletoService.obtenerBoleto(id);
  document.getElementById('id').value = b.id;
  document.getElementById('cliente_id').value = b.cliente_id;
  document.getElementById('pelicula_id').value = b.pelicula_id;
  document.getElementById('fecha').value = b.fecha;
  document.getElementById('hora').value = b.hora;
  document.getElementById('asiento').value = b.asiento;
  document.getElementById('precio').value = b.precio;
};

window.eliminar = async (id) => {
  if (confirm('¿Eliminar este boleto?')) {
    await boletoService.eliminarBoleto(id);
    cargarBoletos();
  }
};

cargarClientes();
cargarPeliculas();
cargarBoletos();
