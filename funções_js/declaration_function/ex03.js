// Invertendo uma string aplicando for e usando o .length para obter o tamanho de determinados tipos de dados, como strings e arrays, nesse caso string.
function inverterString(str) {
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    };
    return invertida;
};
console.log(inverterString("javascript")); 
