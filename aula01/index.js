// Desafios dessa aula!
// OK - Criar um programa que converta libra em dolar, ou graus Celsius para Fahrenheit;
// OK - Exibir o resultado da conversão na tela, no lugar da função alert.

let cotacaoDolarReal = 5.62

let cotacaoLibraDolar = 1.38

let cotacaoLibraReal = 7.77

var cotacao = 0
var moeda = ""
var moedaConvertida = ""


var opcaoConversao = prompt("Digite a opção de conversão desejada?\n1 - Dolar em Real \n2 - Libra Esterlina em Real \n3 - Libra em Dolar")

if (opcaoConversao == 1) {
     cotacao = cotacaoDolarReal
     moeda = "Dolar"
     moedaConvertida = "reais"
    
} else if (opcaoConversao == 2){
        cotacao = cotacaoLibraDolar
        moeda = "Libra"
        moedaConvertida = "dólares"
        
    } else if (opcaoConversao == 3){
         cotacao = cotacaoLibraReal
         moeda = "Libra"
         moedaConvertida = "reais"
        
    } else {
        cotacao = "desconhecido"
        moeda = "desconhecido"
        moedaConvertida = "desconhecido"   
    }

    var valorParaConversao = prompt("Digite o valor a ser convertido")

//alert(valorEmRealDecimal)

var resultado = converteValor(valorParaConversao, cotacao)

listarResultado(resultado, cotacao, moeda, moedaConvertida)


function converteValor(valorParaConversao, cotacao){

    var valorInformadaFloat = parseFloat(valorParaConversao)

    var valorConvertido = valorInformadaFloat * cotacao
    
    var valorConvertidoArredondado = valorConvertido.toFixed(2)
     
    return valorConvertidoArredondado
}

function listarResultado(resultado,cotacao, moeda, moedaConvertida){
    
   
    var listaResultado = document.querySelector('#listaResultado')
    var elementoResultado = "<p> O resultado é: " + resultado + "</p>"
        elementoResultado += "<p> Cotação do "+ moeda +" é: " + cotacao + " "+ moedaConvertida + "</p>"
        
        listaResultado.innerHTML = listaResultado.innerHTML + elementoResultado
  }


  