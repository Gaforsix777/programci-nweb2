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
const  notaAprobacion = 51;
let i=0;
let materialSeleccionada = "";
do {
    if (datos[i].calificacion >= notaAprobacion){
        materialSeleccionada = datos[i].materia
        break;
    }
    i++;
}
while (i<datos.length && materialSeleccionada == "");

if (materialSeleccionada =="")
    console.log("No aprobaste las materias");
else
    console.log("la materia aprobada es : " + materialSeleccionada);