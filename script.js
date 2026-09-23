// =========================
// PRESENTE 1
// =========================

const presente1 = document.getElementById("presente1");
const conteudo1 = presente1.querySelector(".conteudo-presente");

const numeroMotivo = document.getElementById("numero-motivo");
const textoMotivo = document.getElementById("texto-motivo");
const botaoProximo = document.getElementById("proximo-motivo");


// 5 coisas que eu amo na minha mãe
const motivos = [
    "Seu primeiro motivo vai aparecer aqui. 💗",
    "Seu segundo motivo vai aparecer aqui. 🌷",
    "Seu terceiro motivo vai aparecer aqui. 🌸",
    "Seu quarto motivo vai aparecer aqui. 🩷",
    "Seu quinto motivo vai aparecer aqui. 🎀"
];


// Começamos pelo primeiro motivo
let motivoAtual = 0;


// Quando clicar na caixinha do presente
presente1.querySelector(".caixa").addEventListener("click", function () {

    conteudo1.style.display = "block";

});


// Quando clicar no botão "Próximo"
botaoProximo.addEventListener("click", function (event) {

    event.stopPropagation();

    motivoAtual++;

    if (motivoAtual < motivos.length) {

        numeroMotivo.textContent = `${motivoAtual + 1}/5`;

        textoMotivo.textContent = motivos[motivoAtual];

    } else {

        numeroMotivo.textContent = "💗";

        textoMotivo.textContent =
            "E essas são só algumas das infinitas coisas que eu amo em você. Feliz aniversário, mãe! 🌷";

        botaoProximo.style.display = "none";

    }

});