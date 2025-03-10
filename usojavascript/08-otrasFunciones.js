const ciudadesDisponibles = new Array ("Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao");
const paisesDisponibles = new Array ("España", "Francia", "Italia", "Alemania", "Portugal");
const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista existen ${cantidadCiudades} elementos`);
console.log(`En la lista existen ${ciudadesDisponibles.length} elementos`);
//quitar el primer elemento de un array
ciudadesDisponibles.shift();
console.log(`En la lista existen ${ciudadesDisponibles.length} elementos`);
console.log (ciudadesDisponibles);

//quitar el ultimo elemento de un array

ciudadesDisponibles.pop();
console.log(`En la lista existen ${ciudadesDisponibles.length} elementos`);
console.log (ciudadesDisponibles);

//Ordenar lista
console.log(ciudadesDisponibles.sort());

//posicion de un elemento
console.log(`En la lista existen ${paisesDisponibles.indexOf("peru")}`);

//concatenar dos listas
const listaPaisesCiudades = ciudadesDisponibles.concat(paisesDisponibles);
console.log(listaPaisesCiudades);
