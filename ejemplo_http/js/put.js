const deleteData =()=> {
    fetch(${API_URL}/1, {
        method: 'DELETE'
    }).then(response => {
        if (!response.ok) {
            throw new Error(`Error en la respuesta el estado es: ${response.status}`);
        }
        showResult({
            message: 'Post con id 1 fue eliminado correctamente',
            status: response.status
        });

}).catch(error => showResult(error.message, true));
};