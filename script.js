let gameLoop = true,
    i1 = 0, i2 = 0,
    player1_jogou = false, player2_jogou = false,
    botao1 = document.getElementById("botao1"),
    botao2 = document.getElementById("botao2"),
    botao3 = document.getElementById("botao3"),
    imagem1 = document.getElementById("imagem1"),
    imagem2 = document.getElementById("imagem2");

const numAleatorio = function () {
    return Math.floor(Math.random() * 6) + 1;
}

const jogada1 = function () {
    i1 = numAleatorio();
    player1_jogou = true;
    imagem1.src = i1 + ".png";
    main();
}

const jogada2 = function () {
    i2 = numAleatorio();
    player2_jogou = true;
    imagem2.src = i2 + ".png";
    main();
}

const fimDeJogo = function () {
    if (i1 > 0 && i2 > 0) {
        botao2.classList.add("disabled");
        botao2.classList.add("btn-danger");
        botao1.removeEventListener("click", jogada1);
        botao2.removeEventListener("click", jogada2);
        if (i1 > i2) {
            document.getElementById("vencedor").innerHTML = "Jogador 1 venceu!";
        } else if (i2 > i1) {
            document.getElementById("vencedor").innerHTML = "Jogador 2 venceu!";
        } else {
            document.getElementById("vencedor").innerHTML = "Empate!";
        }
        document.getElementById("soma").innerHTML = "A soma dos dados é: " + (i1 + i2);
        botao3.classList.remove("d-none")
        botao3.addEventListener("click", jogarDnv);
    }
}

const jogarDnv = function () {
    player1_jogou = false;
    player2_jogou = false;
    i1 = 0;
    i2 = 0;
    imagem1.src = "0.png";
    imagem2.src = "0.png";
    document.getElementById("vencedor").innerHTML = "Joguem!";
    document.getElementById("soma").innerHTML = " ";
    botao3.classList.add("d-none");
    main()
}

const main = function () {
    if (!player1_jogou) {
        botao1.classList.remove("disabled");
        botao1.classList.remove("btn-danger");
        botao2.classList.add("disabled");
        botao2.classList.add("btn-danger");
        botao1.addEventListener("click", jogada1);
        botao2.removeEventListener("click", jogada2);
    } else if (player1_jogou) {
        botao2.classList.remove("disabled");
        botao2.classList.remove("btn-danger");
        botao1.classList.add("disabled");
        botao1.classList.add("btn-danger");
        botao1.removeEventListener("click", jogada1);
        botao2.addEventListener("click", jogada2);
        fimDeJogo();
    }
}

main();



