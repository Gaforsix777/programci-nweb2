function palabraMasLarga(frase) {
    var palabras = frase.split(' ');
    var palabraLarga = '';
    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraLarga.length) {
            palabraLarga = palabras[i];
        }
    }
    return palabraLarga;
}
console.log(palabraMasLarga("El juego fortnite es el mejor del mundo")); 