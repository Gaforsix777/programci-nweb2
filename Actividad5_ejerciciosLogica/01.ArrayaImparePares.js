function contarParesImpares(hola) {
    var resultado = { pares: [], impares: [] };
    for (var i = 0; i < hola.length; i++) {
        if (hola[i] % 2 === 0) {
            resultado.pares.push(hola[i]);
        } else {
            resultado.impares.push(hola[i]);
        }
    }
    return resultado;
}

console.log(contarParesImpares([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));