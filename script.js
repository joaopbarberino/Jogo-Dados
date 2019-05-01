document.getElementById("botao").addEventListener("click", function () {

    let i1 = Math.round(Math.random() * 4) + 1;
    document.getElementById("imagem1").src = i1 + ".png";

    let i2 = Math.round(Math.random() * 4) + 1;
    document.getElementById("imagem2").src = i2 + ".png";

    soma = i1 + i2;
    document.getElementById("msgSoma").innerHTML = "A soma dos dados é: " + (i1 + i2) + " e ";
    if (i1 > i2) {
        document.getElementById("vencedor").innerHTML = "Jogador 1 venceu!";
    } else if (i2 > i1) {
        document.getElementById("vencedor").innerHTML = "Jogador 2 venceu!";
    } else {
        document.getElementById("vencedor").innerHTML = "Empate!";
    }
});