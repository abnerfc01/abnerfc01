// Desafios dessa aula!
// Criar uma array adicional com o nome dos filmes e trabalhar com as duas ao mesmo tempo, unindo imagens e textos através dos índices;
// Exibir um prompt() com uma lista de filmes e exibir na tela somente o filme escolhido pelo usuário através do prompt;
// Continuando o desafio acima, como fazer com que um filme só seja exibido uma vez?

var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (var i =0; i < listaFilmes.length; i++){
  document.write("<img src = "+ listaFilmes[i] + ">")
}
