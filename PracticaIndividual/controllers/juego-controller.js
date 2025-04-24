import { juegoService } from "../service/juego-service.js";

const form = document.querySelector("[data-formulario]");
const contenedor = document.querySelector("[data-contenedor]");
const inputNombre = document.querySelector("[data-nombre]");
const inputPlataforma = document.querySelector("[data-plataforma]");
const inputGenero = document.querySelector("[data-genero]");
const inputCompletado = document.querySelector("[data-completado]");
const boton = form.querySelector(".button");

const crearTarjeta = ({ id, nombre, plataforma, genero, completado }) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta-juego");
  tarjeta.innerHTML = `
    <h3>${nombre}</h3>
    <p><strong>Plataforma:</strong> ${plataforma}</p>
    <p><strong>Género:</strong> ${genero}</p>
    <p><strong>Completado:</strong> ${completado ? "✅" : "❌"}</p>
    <div class="botones">
      <button class="editar">Editar</button>
      <button class="eliminar">Eliminar</button>
    </div>
  `;

  tarjeta.querySelector(".eliminar").addEventListener("click", () => {
    juegoService.eliminarJuego(id).then(() => tarjeta.remove());
  });

  tarjeta.querySelector(".editar").addEventListener("click", () => {
    inputNombre.value = nombre;
    inputPlataforma.value = plataforma;
    inputGenero.value = genero;
    inputCompletado.checked = completado;
    form.setAttribute("data-id", id);
    boton.textContent = "Actualizar juego";
  });

  return tarjeta;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = inputNombre.value.trim();
  const plataforma = inputPlataforma.value.trim();
  const genero = inputGenero.value.trim();
  const completado = inputCompletado.checked;
  const id = form.getAttribute("data-id");

  if (id) {
    juegoService.editarJuego(id, { nombre, plataforma, genero, completado })
      .then(() => location.reload());
  } else {
    juegoService.crearJuego({ nombre, plataforma, genero, completado })
      .then(() => location.reload());
  }
});

juegoService.listaJuegos().then(juegos => {
  juegos.forEach(juego => contenedor.appendChild(crearTarjeta(juego)));
});
