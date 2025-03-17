const checkComplete = () => {
    const i = document.createElement('i'); // Creación de un icono
    i.classList.add("far", "fa-check-square", "icon"); // Dando estilos al icono
    i.addEventListener("click", toggleComplete); // Escuchar el evento de clic
    return i;
};

const toggleComplete = (evento) => {
    const element = evento.target;
    element.classList.toggle('fas'); // Alternar entre sólido (marcado)
    element.classList.toggle('far'); // Alternar entre contorneado (desmarcado)
    element.classList.toggle('completeIcon'); // Cambiar el color o estilo adicional
};

export default checkComplete;