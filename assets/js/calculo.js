function decimalParaBinario(decimal) {
    let binario = "";
    while (decimal > 0) {
        binario = (decimal % 2) + binario;
        decimal = (decimal / 2) | 0;
    }
    return binario;
}

function binarioParaDecimal(binario) {
    let decimal = 0;
    for (let i = 0; i < binario.length; i++) {
        decimal += parseInt(binario[i]) * (1 << (binario.length - 1 - i));
    }
    return decimal;
}

function decimalParaHexadecimal(decimal2) {
    let hexadecimal = "";
    while (decimal2 > 0) {
        let resto = decimal2 % 16;
        if (resto < 10) {
            hexadecimal = resto + hexadecimal;
        } else {
            switch(resto) {
                case 10:
                    hexadecimal = "A" + hexadecimal;
                    break;
                case 11:
                    hexadecimal = "B" + hexadecimal;
                    break;
                case 12:
                    hexadecimal = "C" + hexadecimal;
                    break;
                case 13:
                    hexadecimal = "D" + hexadecimal;
                    break;
                case 14:
                    hexadecimal = "E" + hexadecimal;
                    break;
                case 15:
                    hexadecimal = "F" + hexadecimal;
                    break;
            }
        }
        decimal2 = (decimal2 / 16) | 0;
    }
    return hexadecimal;
}

function hexadecimalParaDecimal(hexadecimal) {
    let decimal = 0;
    for (let i = 0; i < hexadecimal.length; i++) {
        let valor;
        if (hexadecimal[i] >= '0' && hexadecimal[i] <= '9') {
            valor = parseInt(hexadecimal[i]);
        } else {
            switch(hexadecimal[i]) {
                case 'A':
                    valor = 10;
                    break;
                case 'B':
                    valor = 11;
                    break;
                case 'C':
                    valor = 12;
                    break;
                case 'D':
                    valor = 13;
                    break;
                case 'E':
                    valor = 14;
                    break;
                case 'F':
                    valor = 15;
                    break;
            }
        }
        decimal += valor * (1 << (4 * (hexadecimal.length - 1 - i)));
    }
    return decimal;
}