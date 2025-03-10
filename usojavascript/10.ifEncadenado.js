const ciudadDestino = "Sucre";
const ciudadesDisponibles = new Array ("Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao");

let edadPasajero = 17;
let compania = false;

if(edadPasajero >= 18 || compania){
    if(ciudadDestsino.indexOf(ciudadDestino) > -1){
        console.log("Pasaje disponible");
    }
    else{
        console.log("No hay pasaje disponible");
    }
}else {
    if(edadPasajero >= 16 && ciudadDestino=="Sucre"){
        console.log("Pasaje disponible");
    }
    else{
        console.log("No hay pasaje disponible");
    }
}