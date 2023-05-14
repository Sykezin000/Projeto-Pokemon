const botaoAlterarTema= document.getElementById("botao-alterar-tema");

const body= document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click",() => {

    const modoEscuroEsstaAtivo=body.classList.contains("modo-escuro")

if(modoEscuroEsstaAtivo) {
body.classList.remove("modo-escuro");

imagemBotaoTrocaDeTema.setAttribute('src','./src/imagens/sun.png');

} else{
body.classList.add("modo-escuro");
     
imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    
 }

});