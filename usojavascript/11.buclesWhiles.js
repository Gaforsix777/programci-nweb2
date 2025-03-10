const ciudadesDisponibles = new Array ("Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao");
const precioPasaje = new Array (1000, 2000, 3000, 4000, 5000);
const presuDisponible = 210;

let i=0;

while(precioPasaje[i]>presuDisponible && i< precioDisponibles.length){
    i++;
}
if (i== ciudadesDisponibles.length){
    console.log("No hay pasajes disponibles")
}
else 
    console.log("Se puede comprar pasaje para " + ciudadesDisponibles[i]);

// Expected output: