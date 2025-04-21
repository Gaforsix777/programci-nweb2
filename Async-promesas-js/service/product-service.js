const url = "http://localhost:3000/productos";

const listaProductos = async () => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al obtener productos");
  return await res.json();
};

const crearProducto = async (nombre, precio, descripcion) => {
  const nuevo = { nombre, precio: parseFloat(precio), descripcion };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevo)
  });
  if (!res.ok) throw new Error("Error al crear producto");
  return await res.json();
};

const eliminarProducto = async (id) => {
  const res = await fetch(`${url}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar producto");
};

const editarProducto = async (id, nombre, precio, descripcion) => {
  const actualizado = { nombre, precio: parseFloat(precio), descripcion };
  const res = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(actualizado)
  });
  if (!res.ok) throw new Error("Error al editar producto");
};

export const productService = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  editarProducto
};
