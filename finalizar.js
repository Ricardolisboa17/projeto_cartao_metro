let tag_valorTotal = document.getElementById("valor-total");
let tag_insira_valor = document.getElementById("insira-valor");
let tag_troco = document.getElementById("troco");

let valorTotal = localStorage.getItem("valor");
tag_valorTotal.innerHTML = valorTotal;

tag_insira_valor.focus();

function inserirValor(){
    let valor_inserido = tag_insira_valor.value;
    let troco_cliente = valor_inserido - valorTotal;

    if(valor_inserido < valorTotal){
        alert("Valor inserido é menor que o valor Total");
        tag_insira_valor.value = "";
        tag_insira_valor.focus();
        return
    }
    else if(valor_inserido > valorTotal){
        alert("Aguarde o seu troco");
        tag_troco.value = troco_cliente;
        tag_insira_valor.value = "";
        tag_insira_valor.focus();
        window.setTimeout('window.location.href = "index.html"', 1000*5);   
    }
    else{
        alert("Compra finalizada");
        tag_insira_valor.value = "";
        tag_insira_valor.focus();
        window.location.href = "index.html";
    }
}

