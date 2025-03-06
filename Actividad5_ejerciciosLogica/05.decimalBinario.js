function decimalABinario(num) {
    var binario = '';
    while (num > 0) {
        binario = (num % 2) + binario;
        num = Math.floor(num / 2);
    }
    return binario;
}

console.log(decimalABinario(10)); 