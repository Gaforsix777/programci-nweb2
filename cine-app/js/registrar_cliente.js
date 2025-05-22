import { clienteService } from '../service/clienteService.js';

const form = document.getElementById('formCliente');
const tabla = document.getElementById('tablaClientes');

const cargarClientes = async () => {
  const clientes = await clienteService.listarClientes();
  tabla.innerHTML = '';
  clientes.forEach(c => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${c.nombre}</td>
      <td>${c.correo}</td>
      <td>${c.telefono}</td>
      <td>
        <button onclick="editar(${c.id})">editar</button>
        <button onclick="eliminar(${c.id})">eliminar</button>
      </td>
    `;
    tabla.appendChild(fila);
  });
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('id').value;
  const cliente = {
    nombre: document.getElementById('nombre').value,
    correo: document.getElementById('correo').value,
    telefono: document.getElementById('telefono').value
  };

  if (id) {
    await clienteService.actualizarCliente(parseInt(id), cliente);
  } else {
    await clienteService.crearCliente(cliente);
  }

  form.reset();
  document.getElementById('id').value = '';
  cargarClientes();
});

window.editar = async (id) => {
  const [c] = await clienteService.obtenerCliente(id);
  document.getElementById('id').value = c.id;
  document.getElementById('nombre').value = c.nombre;
  document.getElementById('correo').value = c.correo;
  document.getElementById('telefono').value = c.telefono;
};

window.eliminar = async (id) => {
  if (confirm('¿Eliminar este cliente?')) {
    await clienteService.eliminarCliente(id);
    cargarClientes();
  }
};

cargarClientes();
