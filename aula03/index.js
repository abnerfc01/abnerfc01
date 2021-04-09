// Desafios dessa aula!
// Modifique o cenário do mentalista e adicione mecanismos de chances, pontos e etc!
// O comando break pode ser substituído para que o código saia do while sem ele. Você consegue pensar em uma alternativa?
// Alterar o math.random() para funcionar com outros intervalos entre números.

var numeroSecreto = parseInt(Math.random()*10)

var tentativas = 3

while (tentativas > 0) {
  
   var chute = parseInt(prompt("Digite um número entre 0 e 10"))
  
  if (numeroSecreto == chute){

    alert("Acertou")
    break
    
  }else if (chute > numeroSecreto){

    alert("Número secreto é menor. \nVocê tem " + tentativas +" tentativas")
    
    tentativas = tentativas - 1
  
  } else if (chute < numeroSecreto){
    alert("Numero secreto é maior. \nVocê tem " + tentativas +" tentativas")
    tentativas = tentativas - 1
    
  }
}

if (chute != numeroSecreto) {
  
  alert("Suas tentativas acabaram! \nO número secreto era: "+numeroSecreto)
  
}
  
  
