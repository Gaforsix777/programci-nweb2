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
const procesarDatos = datos => {
    return datos
    .fitlter(datos => datos.calificacion > 51)
    .map(datos => {
        const {materia} = materia;
        return materia.length > 5 ? materia.toUpperCase() : materia.toLowerCase();

    });}

    const resultado = procesarDatos(datos);
    console.log(resultado);