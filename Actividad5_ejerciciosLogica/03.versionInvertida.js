function invertirNumero(num) {
    var numStr = num.toString();
    var numInvertidoStr = '';
    for (var i = numStr.length - 1; i >= 0; i--) {
        numInvertidoStr += numStr[i];
    }
    return parseInt(numInvertidoStr, 10);
}

console.log(invertirNumero(12345)); 