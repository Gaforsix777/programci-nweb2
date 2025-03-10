const datos =[
    {
        "materia": "Programacion Web",
        "calificacion": 70
    },
    {
        "materia": "Base de Datos",
        "calificacion": 10
    },
    {
        "materia": "Robotica",
        "calificacion": 10
    },
    {
        "materia": "Sistemas Operativos",
        "calificacion": 10
    },
    {
        "materia": "Desarrollo Movil",
        "calificacion": 10
    }
];
let materialSeleccionada = "";
const notaAprobacion = 51;
for(let i=0; i<datos.length && materialSeleccionada == ""; i++){
    if(datos[i].calificacion >= notaAprobacion){
        materialSeleccionada = datos[i].materia;
    }
}
if(materiaSeleccionada)
    console.log("--..");
else
    console.log("--------");