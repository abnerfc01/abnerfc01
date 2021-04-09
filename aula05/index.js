// Desafios dessa aula!
// Substituir o pôster de cada filme pelo trailer. Dica: pesquisem pela opção embed no menu de compartilhamento do YouTube;
// Estudar o innerHTML e a função que está criando a lista de pôsters. Como o código funciona para adicionar filmes sem utilizar array?
// Criar a função validaFilme() que faça somente a verificação que está sendo feita no if.

function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#filme')
  console.log(campoFilmeFavorito)
  var filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito.endsWith('.jpg')){
    listarFilmesNaTela(filmeFavorito)  
  } else {
    alert("Imagem Inválida")
  }
  campoFilmeFavorito.value = ""
  
}

function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src="+ filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
