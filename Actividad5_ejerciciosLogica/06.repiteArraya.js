function numeroMasRepetido(arr) {
    var contador = {};
    var maxNum = arr[0];
    var maxCount = 1;

    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (contador[num]) {
            contador[num]++;
        } else {
            contador[num] = 1;
        }

        if (contador[num] > maxCount) {
            maxNum = num;
            maxCount = contador[num];
        }
    }

    return maxNum;
}
console.log(numeroMasRepetido([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])); // 4