// Calculando o fatorial de um número usando recursividade para chamar repetidamente a função até atingir o objetivo.
let fatorial = (n)  => {
    if (n==1){
        return 1;
    } else {
        return n * fatorial(n-1);
    };
};
console.log(fatorial(5));