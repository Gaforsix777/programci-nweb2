function esPrimo(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function numerosPrimos(arr) {
    var primos = [];
    for (var i = 0; i < arr.length; i++) {
        if (esPrimo(arr[i])) {
            primos.push(arr[i]);
        }
    }
    return primos;
}

console.log(numerosPrimos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));