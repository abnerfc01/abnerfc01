// Desafios dessa aula!
// Criar um programa que converta libra em dolar, ou graus Celsius para Fahrenheit;
// Exibir o resultado da conversão na tela, no lugar da função alert.

var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.5

var valorEmRealDecimal = valorEmReal.toFixed(2)

alert(valorEmRealDecimal)
