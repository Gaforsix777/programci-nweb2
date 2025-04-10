import { getFormData, clearForm, renderFila } from './dom.js';
import { showResult } from './result.js';

export const addData = () => {
  const data = getFormData();

  // Validación mínima
  if (!data.Task || !data.Fecha || !data.Nombre) {
    showResult({ message: '❌ Todos los campos son obligatorios' }, true);
    return;
  }

  fetch('http://localhost:3000/datos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(`❌ Error al guardar. Código: ${res.status}`);
      }
      return res.json();
    })
    .then(savedData => {
      console.log("✅ Datos guardados en el servidor:", savedData);

      if (!savedData.id) {
        throw new Error("⚠️ El servidor no devolvió un ID. No se puede renderizar.");
      }

      renderFila(savedData); // se muestra en la tabla con ID
      clearForm();
      showResult({ message: '✅ Tarea agregada correctamente' });
    })
    .catch(err => {
      console.error('🛑 Error al agregar:', err.message);
      showResult({ message: err.message }, true);
    });
};
