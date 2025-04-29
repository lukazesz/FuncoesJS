// Filtrando números pares usando o método .filter para filtrar os números pares.
const filtrarNumPares = function(numeros) {
    return numeros.filter(num => num % 2 === 0);
};
console.log(filtrarNumPares([1, 2, 3, 4, 5, 6]));
