export const renderFila = (data) => {
  const tbody = document.querySelector('.tbody');
  if (!tbody) {
    console.error('❌ No se encontró .tbody en el HTML');
    return;
  }

  const tr = document.createElement('tr');
  tr.setAttribute('data-id', data.id);

  // Celdas con datos
  tr.innerHTML = `
    <td>${data.Task}</td>
    <td>${data.Fecha}</td>
    <td>${data.Descripcion}</td>
    <td>${data.Nombre}</td>
    <td>${data.ValorEn}</td>
  `;

  // BOTÓN ELIMINAR
  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = 'Eliminar';
  btnEliminar.classList.add('btn-delete');
  btnEliminar.addEventListener('click', () => {
    fetch(`http://localhost:3000/datos/${data.id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) throw new Error('Error al eliminar');
        tr.remove();
      })
      .catch(err => console.error('❌ Error al eliminar:', err));
  });

  // BOTÓN EDITAR
  const btnEditar = document.createElement('button');
  btnEditar.textContent = 'Editar';
  btnEditar.classList.add('btn-edit');

  btnEditar.addEventListener('click', () => {
    // Llenar el formulario con los datos actuales
    document.querySelector('.input-task').value = data.Task;
    document.querySelector('.input-date').value = data.Fecha;
    document.querySelector('.input-desc').value = data.Descripcion;
    document.querySelector('.input-name').value = data.Nombre;
    document.querySelector('.input-value').value = data.ValorEn;

    // Cambiar texto del botón
    btnEditar.textContent = 'Guardar';

    // Remover cualquier otro listener previo
    const nuevoBoton = btnEditar.cloneNode(true);
    btnEditar.replaceWith(nuevoBoton);

    nuevoBoton.addEventListener('click', () => {
      const updatedData = {
        Task: document.querySelector('.input-task').value,
        Fecha: document.querySelector('.input-date').value,
        Descripcion: document.querySelector('.input-desc').value,
        Nombre: document.querySelector('.input-name').value,
        ValorEn: document.querySelector('.input-value').value
      };

      fetch(`http://localhost:3000/datos/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      })
        .then(res => res.json())
        .then(updated => {
          tr.cells[0].textContent = updated.Task;
          tr.cells[1].textContent = updated.Fecha;
          tr.cells[2].textContent = updated.Descripcion;
          tr.cells[3].textContent = updated.Nombre;
          tr.cells[4].textContent = updated.ValorEn;

          // Restaurar botón
          nuevoBoton.textContent = 'Editar';

          // Limpiar formulario
          document.querySelector('.input-task').value = '';
          document.querySelector('.input-date').value = '';
          document.querySelector('.input-desc').value = '';
          document.querySelector('.input-name').value = '';
          document.querySelector('.input-value').value = '';

          // Restaurar funcionalidad de editar
          nuevoBoton.replaceWith(btnEditar);
        })
        .catch(err => console.error('❌ Error al actualizar:', err));
    });
  });

  // Celda con botones
  const tdAcciones = document.createElement('td');
  tdAcciones.appendChild(btnEliminar);
  tdAcciones.appendChild(btnEditar);
  tr.appendChild(tdAcciones);

  tbody.appendChild(tr);
};
