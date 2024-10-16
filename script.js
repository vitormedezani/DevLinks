function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //outra maneira de fazer o toggle
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light e a descrição
    img.setAttribute("src", "./assets/avatar-light.png")
    // descrição
    img.setAttribute("alt", "Foto do Vitor Ayala, de camisa preta e óculos de grau com fundo branco")
  } else {
    // se tiver sem light mode, manter a imagem e a descrição normais
    img.setAttribute("src", "./assets/avatar.png")
    // descrição
    img.setAttribute("alt", "Foto do Vitor Ayala, de camisa branca e óculos de grau")
  }
}
