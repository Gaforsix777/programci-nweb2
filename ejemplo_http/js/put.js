const putData = () => {
    const update = {
        titulo: "Actualizado",
        descripcion: "actualizado",
        fecha: new Date().toISOString()
    };

    fetch(`${API_URL}/5726`, { // Cambiado a backticks para interpolación
        method: "PUT",
        headers: {
            "Content-Type": "application/json", // Corregido el error tipográfico
            "Accept": "application/json" // Corregido el error tipográfico
        },
        body: JSON.stringify(update)
    })
    .then(response => { // Cambiado Response a response
        if (!response.ok) {
            throw new Error(`Error en la respuesta estado: ${response.status}`);
        }
        return response.json();
    })
    .then(data => showResult(data))
    .catch(error => showResult(error.message, true));
};