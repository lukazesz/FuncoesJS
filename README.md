# 📌 Funções em JavaScript

## ✨ Sobre o projeto

Este repositório contém exercícios resolvidos relacionados aos diferentes tipos de funções em JavaScript, além de conceitos essenciais como **métodos, condicionais e laços de repetição**. O objetivo é demonstrar a aplicação prática desses conceitos e como utilizá-los corretamente.

---

## 🚀 Tipos de Funções

Abaixo estão os três tipos principais de funções abordados neste projeto:

### 🔹 Arrow Function

As **arrow functions** oferecem uma sintaxe mais simplificada e são ideais para funções curtas e expressões simples. Elas não possuem seu próprio `this`, herdando do escopo onde foram definidas.

```js
const soma = (a, b) => a + b;
console.log(soma(2, 3)); // 5
```

### 🔹 Function Expression

Uma function expression é uma função atribuída a uma variável. Diferente das declarações de função, ela não sofre hoisting, ou seja, só pode ser utilizada após a sua definição.

```js
const saudacao = function(nome) {
  return `Olá, ${nome}!`;
};
console.log(saudacao("Lucas")); // "Olá, Lucas!"
```

### 🔹 Function Declaration

A function declaration é a forma mais tradicional de definir uma função. Diferente das function expressions, ela sofre hoisting, ou seja, pode ser chamada antes mesmo de sua definição.

```js
function saudacao(nome) {
  return `Olá, ${nome}!`;
}
console.log(saudacao("Lucas")); // "Olá, Lucas!"
```

---

## 📚 Conceitos Essenciais Usados nos Exercícios

### 🛠️ Métodos

Métodos são funções associadas a objetos. Eles permitem que um objeto execute ações e manipule seus próprios dados. Um método é simplesmente uma função armazenada como propriedade dentro de um objeto.

```js
const usuario = {
  nome: "Lucas",
  saudacao: function() {
    return `Olá, ${this.nome}!`;
  }
};
console.log(usuario.saudacao()); // "Olá, Lucas!"
```

### 🔄 Condicionais

Condicionais são utilizadas para executar um bloco de código com base em uma condição. As principais estruturas incluem:

- `if...else` → Executa um código se a condição for verdadeira (true). Se for falsa (false), o bloco dentro de `else` é executado.
- Operador ternário `(? :)` → Uma forma compacta de escrever condicionais.
- `switch` → Usado para múltiplas verificações de igualdade.

```js
const nota = 85;

if (nota >= 90) {
  console.log("Aprovado com excelência!");
} else if (nota >= 70) {
  console.log("Aprovado.");
} else {
  console.log("Reprovado.");
}
```

### 🔁 Laços de repetição

Os loops permitem repetir um bloco de código várias vezes até que uma condição seja atendida. Os principais são:

- `for` → Melhor para repetições com quantidade fixa.
- `while` → Continua rodando enquanto a condição for verdadeira.
- `do...while` → Executa pelo menos uma vez, independentemente da condição.
- `forEach` → Método usado para percorrer arrays.

```js
for (let i = 1; i <= 5; i++) {
  console.log(`Contagem: ${i}`);
}
```

---

## 🏁 Conclusão

Este repositório é um excelente ponto de partida para aprender sobre funções, métodos, condicionais e loops em JavaScript. Os exercícios demonstram como cada conceito pode ser aplicado na prática.

💡 Quer contribuir com melhorias ou adicionar novos exercícios? Fique à vontade para abrir um Pull Request! 🚀
