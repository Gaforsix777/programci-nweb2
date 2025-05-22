const SUPABASE_URL = 'https://dkznbykxyudompjdhuvr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrem5ieWt4eXVkb21wamRodXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTk5NDcsImV4cCI6MjA2MzQ5NTk0N30.hfClKsQzsDAg7EmeAeblj5NVStsbQ3-lltpRJqFW1OI';
const API_URL = `${SUPABASE_URL}/rest/v1/peliculas`;
const HEADERS = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json'
};

const listarPeliculas = () => {
  return fetch(`${API_URL}?select=*,sala:salas(nombre)`, { headers: HEADERS })
    .then(res => res.json());
};
const crearPelicula = (pelicula) => {
  return fetch(API_URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(pelicula)
  }).then(async res => {
    if (!res.ok) throw new Error(await res.text());
    const text = await res.text();
    return text ? JSON.parse(text) : pelicula;
  });
};

const eliminarPelicula = (id) => {
  return fetch(`${API_URL}?id=eq.${id}`, {
    method: 'DELETE',
    headers: HEADERS
  });
};

const obtenerPelicula = (id) => {
  return fetch(`${API_URL}?id=eq.${id}`, {
    headers: HEADERS
  }).then(res => res.json());
};

const actualizarPelicula = (id, pelicula) => {
  return fetch(`${API_URL}?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      ...HEADERS,
      Prefer: 'return=representation'
    },
    body: JSON.stringify(pelicula)
  }).then(res => res.json());
};

export const peliculaService = {
  listarPeliculas,
  crearPelicula,
  eliminarPelicula,
  obtenerPelicula,
  actualizarPelicula
};
