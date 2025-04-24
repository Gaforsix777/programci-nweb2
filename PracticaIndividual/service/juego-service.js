const url = "http://localhost:3000/juegos";

const listaJuegos = async () => {
  const res = await fetch(url);
  return await res.json();
};

const crearJuego = async (juego) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(juego)
  });
  return await res.json();
};

const eliminarJuego = async (id) => {
  return await fetch(`${url}/${id}`, { method: "DELETE" });
};

const editarJuego = async (id, juego) => {
  return await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(juego)
  });
};

export const juegoService = {
  listaJuegos,
  crearJuego,
  eliminarJuego,
  editarJuego
};
