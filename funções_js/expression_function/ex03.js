// Calculando um desconto.
const calcularDesconto = function(preco, desconto) {
    return preco - (preco * (desconto / 100));
};
console.log(calcularDesconto(100, 20));
