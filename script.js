const titulo = document.getElementById("titulo");

const sim = document.getElementById("sim");
const nao = document.getElementById("nao");

const pergunta = document.getElementById("pergunta");
const final = document.getElementById("final");


let tamanhoSim = 20;
let tamanhoNao = 20;

let contador = 0;


const perguntas = [
    "Você me ama??",
    "Tem certeza??",
    "Pensa melhor... ❤️",
    "Sério que você vai apertar não? 😭",
    "Última chance!",
    "Você realmente não me ama??",
    "Agora só existe uma resposta ❤️"
];


nao.addEventListener("click", function () {

    contador++;


    if (contador < perguntas.length) {
        titulo.textContent = perguntas[contador];
    }


    tamanhoSim += 10;

    tamanhoNao -= 3;


    sim.style.fontSize = tamanhoSim + "px";


    sim.style.padding =
        (15 + contador * 3) + "px " +
        (30 + contador * 5) + "px";


    nao.style.fontSize =
        Math.max(tamanhoNao, 5) + "px";


    if (contador >= perguntas.length - 1) {

        nao.style.display = "none";

        titulo.textContent =
            "Só existe uma resposta agora... ❤️";
    }

});


sim.addEventListener("click", function () {

    pergunta.style.display = "none";

    final.style.display = "block";

});