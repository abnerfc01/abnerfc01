// Desafios dessa aula!
// Exibir um pokemon na tela e pedir para o usuario escrever o nome desse pokemon. Exibir se acertou ou errou o nome.

var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))

var segundoValor = parseInt(prompt("Digite o segundo valor:"))

var operacao = prompt("Digite 1 para Divisão, \n 2 para multiplicaçao, \n 3 para soma \n 4 para subtração: ")

if (operacao == 1){
  
  var resultado = primeiroValor / segundoValor
  
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "<\h2>")
} else if (operacao == 2){
  
  var resultado = primeiroValor * segundoValor
  
  document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "<\h2>")
  
} else if (operacao == 3){
  
  var resultado = primeiroValor + segundoValor
  
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "<\h2>")
  
} else if (operacao == 4){
  
  var resultado = primeiroValor - segundoValor
  
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "<\h2>")
  
} else {
  
  document.write("<h2>" + "Opção invalida" + "<\h2>")
  
 
}
