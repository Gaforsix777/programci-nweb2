import { productService } from "../service/product-service.js";

const form = document.querySelector("[data-formulario]");
const contenedor = document.querySelector("[data-productos]");
const inputNombre = document.querySelector("[data-nombre]");
const inputPrecio = document.querySelector("[data-precio]");
const inputDescripcion = document.querySelector("[data-descripcion]");
const btnSubmit = form.querySelector(".button");

const crearTarjeta = (nombre, precio, descripcion, id) => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "card-producto";
  tarjeta.innerHTML = `
    <h3>${nombre}</h3>
    <p><strong>Precio:</strong> $${parseFloat(precio).toFixed(2)}</p>
    <p>${descripcion}</p>
    <button class="delete-button" data-id="${id}">Eliminar</button>
    <button class="edit-button" data-id="${id}">Editar</button>
  `;

  tarjeta.querySelector(".delete-button").addEventListener("click", () => {
    productService.eliminarProducto(id)
      .then(() => tarjeta.remove())
      .catch(() => alert("Error al eliminar producto"));
  });

  tarjeta.querySelector(".edit-button").addEventListener("click", () => {
    inputNombre.value = nombre;
    inputPrecio.value = precio;
    inputDescripcion.value = descripcion;
    form.setAttribute("data-edit-id", id);
    btnSubmit.textContent = "Actualizar producto";
  });

  return tarjeta;
};

productService.listaProductos().then((data) => {
  data.forEach(({ nombre, precio, descripcion, id }) => {
    const tarjeta = crearTarjeta(nombre, precio, descripcion, id);
    contenedor.appendChild(tarjeta);
  });
}).catch(() => alert("Error al cargar productos"));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = inputNombre.value.trim();
  const precio = inputPrecio.value.trim();
  const descripcion = inputDescripcion.value.trim();
  const idEditar = form.getAttribute("data-edit-id");

  if (!nombre || !precio || !descripcion) {
    alert("Completa todos los campos");
    return;
  }

  if (idEditar) {
    productService.editarProducto(idEditar, nombre, precio, descripcion)
      .then(() => {
        form.reset();
        form.removeAttribute("data-edit-id");
        btnSubmit.textContent = "Registrar producto";
        location.reload();
      })
      .catch(() => alert("Error al actualizar"));
  } else {
    productService.crearProducto(nombre, precio, descripcion)
      .then(() => {
        form.reset();
        window.location.href = "./registro_completado.html";
      })
      .catch(() => alert("Error al registrar"));
  }
});