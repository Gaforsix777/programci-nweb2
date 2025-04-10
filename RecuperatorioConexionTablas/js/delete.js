import { clearForm, selectedRow, setSelectedRow } from './dom.js';
import { showResult } from './result.js';

export const deleteData = () => {
  if (!selectedRow) {
    showResult({ message: '⚠️ Selecciona una fila para eliminar' }, true);
    return;
  }

  const id = selectedRow.getAttribute('data-id');

  if (!id) {
    // Si no tiene ID (no fue guardada en el servidor), solo se elimina del DOM
    selectedRow.remove();
    clearForm();
    setSelectedRow(null);
    showResult({ message: '🗑️ Fila eliminada solo de la tabla (sin ID)' });
    return;
  }

  // Eliminar del servidor
  fetch(`http://localhost:3000/datos/${id}`, {
    method: 'DELETE'
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error al eliminar en el servidor. Código: ${res.status}`);
      }
      // Si se elimina con éxito, también se borra del DOM
      selectedRow.remove();
      clearForm();
      setSelectedRow(null);
      showResult({ message: '🗑️ Eliminada del servidor y de la tabla' });
    })
    .catch(err => {
      console.error('❌ Error en DELETE:', err.message);
      showResult({ message: `❌ ${err.message}` }, true);
    });
};
