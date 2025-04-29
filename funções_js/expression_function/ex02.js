/* Contando quantas vezes cada palavra se repete usando os métodos .toLowerCase para deixar a frase minúscula, .split para dividir a frase em palavras, e .forEach para chamar uma função para cada elemento em uma matriz.
Nesse caso em especial usei a combinação de uma arrow function para complementar o código. */
const contarPalavras = function(frase) {
    let palavras = frase.toLowerCase().split(' ');
    let contagem = {};

    palavras.forEach(palavra => {
        contagem[palavra] = (contagem[palavra] || 0) + 1;
    });
    return contagem;
};
console.log(contarPalavras("eu gosto de javascript porque javascript é incrível"));


