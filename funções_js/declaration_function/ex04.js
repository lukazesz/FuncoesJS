// Calculando a média aritmética de 3 números.
function mediaAritmetica(num1, num2, num3) {
    let media = (num1 + num2 + num3) / 3;
    if (media < 7) {
        return 'reprovado!';
    } else if (media >= 7 && media < 9) {
        return 'mediano!';
    } else {
        return 'acima da média!';
    };
};
let resultado = mediaAritmetica(6, 5, 9);
console.log(resultado);
