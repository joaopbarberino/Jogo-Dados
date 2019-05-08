//             let i1 = Math.round(Math.random() * 4) + 1;
//             document.write("<img class = 'img-fluid' id = 'imagem1' src='" + i1 + ".png'>");
//             document.write("<h1 id = 'jogador1'> Jogador 1 </h1>");
//             let i2 = Math.round(Math.random() * 4) + 1;
//             document.write("<img class = 'img-fluid' id = 'imagem2' src='" + i2 + ".png'>");  
//             document.write("<h1 id = 'jogador2'> Jogador 2 </h1>");
            
//             soma = i1 + i2;
//             document.write("<h1 id = 'msgSoma'> A soma dos dados é: " + (i1+i2) + " e </h1>");
//             if (i1 > i2){
//                 document.write("<h1 id = 'vencedor'> Jogador 1 venceu! </h1>");
//             } else if ( i2 > i1) {
//                 document.write("<h1 id = 'vencedor'> Jogador 2 venceu! </h1>");
//             } else {
//                 document.write("<h1 id = 'vencedor'> Empate! </h1>");
//             }






document.getElementById("botao1").addEventListener("click", function () {

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