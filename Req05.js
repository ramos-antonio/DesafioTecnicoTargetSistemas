/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function reverse() {
  reverseString = (string) => {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i -= 1) {
      newString += string[i];
    }
    return newString;
  }
  document.getElementById('result').innerHTML = reverseString(document.getElementById('data').value);
}
