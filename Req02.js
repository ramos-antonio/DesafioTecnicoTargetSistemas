/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function fibonacci(){
  let data = parseInt(document.getElementById('data').value);
  let result = document.getElementById('result');

  isPerfectSquare = (x) => (parseInt(Math.sqrt(x)) * parseInt(Math.sqrt(x)) === x);

  isFibonacci = (n) => isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);

  result.innerHTML = isFibonacci(data)
    ? (`${data}: Sim, o número informado pertence à sequência de Fibonacci`)
    : (`${data}: Não, o número informado não pertence à sequência de Fibonacci`);
}
