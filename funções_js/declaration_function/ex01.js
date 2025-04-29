// Definindo se o número é par ou impar usando if else.
function parImp (num){
    if (num%2==0){
        return 'par';
    } else{
        return 'impar';
    };
};
let res = parImp (25);
console.log(res);