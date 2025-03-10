let edadPersonal = 17;
let conAcompanante = true;
const precioPasaje = 1000;
const ciudadDestino = new Array ("Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao");
if(precioPasaje === 1000){
    console.log("El precio del pasaje es de 1000");
}
console.log(`Verificando pasaje para ${ciudadDestino[0]}`);

if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18 || conAcompanante)){
    console.log("Pasaje disponible");
}
else {
    console.log("No hay pasaje disponible");
}