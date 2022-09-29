let tag_menos = document.getElementById("btn_menos")
let tag_mais = document.getElementById("btn_mais")
let tag_qntDeCartoes = document.getElementById("numeros-cartoes")
let tag_valor = document.getElementById("valor-passagens")
let tag_texto_cartao = document.getElementById("texto-cartao")

let quantidade = 1;
let passagemUnitaria = 6.50;
let valorDeCobranca = passagemUnitaria;

tag_mais.addEventListener("click",aumentarValor);
tag_menos.addEventListener("click", diminuir);

function aumentarValor(){
   quantidade++;
    valorDeCobranca += passagemUnitaria ;
    tag_qntDeCartoes.innerHTML = quantidade;
    tag_texto_cartao.innerHTML = "Cartões";
    tag_valor.innerHTML = valorDeCobranca;
}

function diminuir(){
    if(quantidade > 1){
        quantidade--;
        valorDeCobranca -= passagemUnitaria;
        tag_qntDeCartoes.innerHTML = quantidade;
        tag_texto_cartao.innerHTML = "Cartões";
        tag_valor.innerHTML = valorDeCobranca;
    }
    if(quantidade <= 1){
        valorDeCobranca = passagemUnitaria;
        tag_qntDeCartoes.innerHTML = quantidade;
        tag_texto_cartao.innerHTML = "Cartão";
        tag_valor.innerHTML = passagemUnitaria;
     }
}

function proximaPagina(){
    localStorage.setItem("valor", valorDeCobranca);
    window.location.href = "finalizar.html";
}
