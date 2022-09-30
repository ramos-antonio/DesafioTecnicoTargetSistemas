/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

const gainData = [
  {Estado: 'SP', valor: 67836.43},
  {Estado: 'RJ', valor: 36678.66},
  {Estado: 'MG', valor: 29229.88},
  {Estado: 'ES', valor: 27165.48},
  {Estado: 'Outros', valor: 19849.53},
];

const sum = (data) => {
  let sumValues = 0;
  data.forEach(item => sumValues += item.valor);
  return sumValues;
};
const percentageByState = gainData.map(item => ({
  Estado: item.Estado,
  valor: item.valor,
  percent: ((item.valor / sum(gainData) * 100).toFixed(2)+"%")
}));

console.log(percentageByState);