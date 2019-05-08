let gameLoop = true;
let i1, i2;


    i1 = document.getElementById("botao1").addEventListener("click", numAleatorio);
    console.log(i1);
    document.getElementById("imagem1").src = i1 + ".png";

    document.getElementById("botao2").addEventListener("click", numAleatorio);


    if (i1 > i2) {
        document.getElementById("vencedor").innerHTML = "Jogador 1 venceu!";
    } else if (i2 > i1) {
        document.getElementById("vencedor").innerHTML = "Jogador 2 venceu!";
    } else {
        document.getElementById("vencedor").innerHTML = "Empate!";
    }
    document.getElementById("soma").innerHTML = "A soma dos dados é: " + (i1 + i2);


function numAleatorio () {
    return i1 = Math.round(Math.random() * 4) + 1;
}
