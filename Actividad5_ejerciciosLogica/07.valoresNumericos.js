function sumarPropiedad(arr, propiedad) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][propiedad]) {
            total += arr[i][propiedad];
        }
    }
    return total;
}

var objetos = [
    { valor: 10 },
    { valor: 20 },
    { valor: 30 }
];
console.log(sumarPropiedad(objetos, 'valor')); 