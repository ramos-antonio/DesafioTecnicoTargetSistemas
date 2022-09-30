/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const jsonData = require('../dados.json');

const valuesGreaterThanZero = (array) => (
  array.filter((value) => (value.valor > 0))
);


// O menor valor de faturamento ocorrido em um dia do mês;
const minValue = valuesGreaterThanZero(jsonData).reduce(
  function(previousValue, currentValue) {
	return previousValue.valor < currentValue.valor
    ? previousValue
    : currentValue;
  }
);
console.log(minValue);

// O maior valor de faturamento ocorrido em um dia do mês;
const maxValue = valuesGreaterThanZero(jsonData).reduce(
  function(previousValue, currentValue) {
	return previousValue.valor > currentValue.valor
    ? previousValue
    : currentValue;
  }
);
console.log(maxValue);

// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
const average = (array) =>{
  let sumValues = 0;
  array.forEach(item => sumValues += item.valor);
  return sumValues / array.length;
};

const maxValues = (array) => (
  array.filter((value) => (value.valor > average(valuesGreaterThanZero(jsonData))))
);
console.log(maxValues(jsonData).length);