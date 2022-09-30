/*
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

function sum() {
  let K = 0
  let SOMA = 0;
  let INDICE = 13;
  for (K; K <= INDICE; K += 1) {
    SOMA += K;
  }
  return SOMA
}
console.log(sum());
