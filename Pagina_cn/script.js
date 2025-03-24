// 1. Variables globales
// Referencia al contador del carrito y los botones de agregar productos
let carritoCantidad = document.getElementById("cantidad-carrito");
let botonesAgregar = document.querySelectorAll(".elemento__boton");
let cantidadEnCarrito = 0; // Contador de productos en el carrito
let carritoProductos = []; // Array para almacenar los productos agregados
let productos = document.querySelectorAll(".elemento"); // Todos los elementos de la tienda

// Crear el menú desplegable del carrito
let menuCarrito = document.createElement("div");
menuCarrito.id = "menuCarrito";
menuCarrito.style.display = "none"; // Oculto por defecto
menuCarrito.style.position = "absolute";
menuCarrito.style.top = "50px";
menuCarrito.style.right = "20px";
menuCarrito.style.backgroundColor = "#fff";
menuCarrito.style.border = "1px solid #ccc";
menuCarrito.style.padding = "10px";
menuCarrito.style.width = "300px";
menuCarrito.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
document.body.appendChild(menuCarrito);

// Botón para abrir/cerrar el menú del carrito
let botonCarrito = document.createElement("button");
botonCarrito.textContent = "Ver Carrito";
botonCarrito.style.marginTop = "10px";
document.getElementById("carrito").appendChild(botonCarrito);

// Alternar la visibilidad del menú del carrito al hacer clic en el botón
botonCarrito.addEventListener("click", () => {
    menuCarrito.style.display = menuCarrito.style.display === "none" ? "block" : "none";
});

// 2. Función para agregar productos al carrito
botonesAgregar.forEach(boton => {
    boton.addEventListener("click", (e) => {
        // Obtener el producto relacionado al botón clicado
        let producto = e.target.closest(".elemento");
        let tituloProducto = producto.querySelector(".elemento__titulo").textContent;

        // Agregar el producto al array del carrito
        carritoProductos.push(tituloProducto);
        cantidadEnCarrito++; // Incrementar el contador
        carritoCantidad.textContent = cantidadEnCarrito; // Actualizar el contador en la interfaz

        // Actualizar el contenido del menú del carrito
        actualizarMenuCarrito();

        // Animación temporal en el botón al agregar un producto
        boton.textContent = "Agregado!";
        setTimeout(() => {
            boton.textContent = "Agregar";
        }, 1000);
    });
});

// 3. Función para actualizar el menú del carrito
function actualizarMenuCarrito() {
    // Limpiar el contenido actual del menú
    menuCarrito.innerHTML = "";

    // Mostrar un mensaje si el carrito está vacío
    if (carritoProductos.length === 0) {
        menuCarrito.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    // Crear una lista para mostrar los productos en el carrito
    let listaProductos = document.createElement("ul");
    listaProductos.style.listStyle = "none";
    listaProductos.style.padding = "0";

    // Agregar cada producto del carrito a la lista
    carritoProductos.forEach((producto, index) => {
        let itemProducto = document.createElement("li");
        itemProducto.style.display = "flex";
        itemProducto.style.justifyContent = "space-between";
        itemProducto.style.marginBottom = "10px";

        // Nombre del producto
        let nombreProducto = document.createElement("span");
        nombreProducto.textContent = producto;

        // Botón para quitar el producto del carrito
        let botonQuitar = document.createElement("button");
        botonQuitar.textContent = "Quitar";
        botonQuitar.style.marginLeft = "10px";
        botonQuitar.addEventListener("click", () => {
            // Eliminar el producto del array y actualizar el menú
            carritoProductos.splice(index, 1);
            cantidadEnCarrito--;
            carritoCantidad.textContent = cantidadEnCarrito;
            actualizarMenuCarrito();
        });

        // Agregar el nombre y el botón a la lista
        itemProducto.appendChild(nombreProducto);
        itemProducto.appendChild(botonQuitar);
        listaProductos.appendChild(itemProducto);
    });

    // Agregar la lista al menú del carrito
    menuCarrito.appendChild(listaProductos);

    // Botón para confirmar la compra
    let botonConfirmar = document.createElement("button");
    botonConfirmar.textContent = "Confirmar Compra";
    botonConfirmar.style.marginTop = "10px";
    botonConfirmar.style.width = "100%";
    botonConfirmar.addEventListener("click", () => {
        alert("¡Gracias por tu compra!");
        carritoProductos = []; // Vaciar el carrito
        cantidadEnCarrito = 0; // Reiniciar el contador
        carritoCantidad.textContent = cantidadEnCarrito;
        actualizarMenuCarrito(); // Actualizar el menú
    });

    // Agregar el botón de confirmar al menú
    menuCarrito.appendChild(botonConfirmar);
}

// 4. Función para filtrar productos en el buscador
let filtroInput = document.getElementById("filtroProductos");

filtroInput.addEventListener("input", () => {
    let query = filtroInput.value.toLowerCase(); // Texto ingresado en el buscador
    productos.forEach(producto => {
        let titulo = producto.querySelector(".elemento__titulo").textContent.toLowerCase();
        // Mostrar u ocultar productos según el texto ingresado
        if (titulo.includes(query)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
});

// 5. Función para cambiar el modo de color con persistencia
let defaultModeBtn = document.getElementById("defaultModeBtn");
let darkModeBtn = document.getElementById("darkModeBtn");
let lightModeBtn = document.getElementById("lightModeBtn");

// Aplicar el modo guardado en localStorage al cargar la página
let savedMode = localStorage.getItem("colorMode");
if (savedMode) {
    document.body.className = savedMode;
}

// Cambiar al modo "default"
defaultModeBtn.addEventListener("click", () => {
    document.body.className = "default";
    localStorage.setItem("colorMode", "default");
});

// Cambiar al modo "oscuro"
darkModeBtn.addEventListener("click", () => {
    document.body.className = "dark-mode";
    localStorage.setItem("colorMode", "dark-mode");
});

// Cambiar al modo "claro"
lightModeBtn.addEventListener("click", () => {
    document.body.className = "light-mode";
    localStorage.setItem("colorMode", "light-mode");
});