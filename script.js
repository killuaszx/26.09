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
    "Amo que nós somos muito mais do que mãe e filha. Somos melhores amigas! 💗",
    "Amo que você é linda e eu puxei de você KKKKK. 🎀",
    "Amo o quanto você é atenciosa e sempre cuida de mim. 🌷",
    "Amo que, mesmo cansada, você sempre arruma um tempinho para nós. 🩷",
    "E, por fim, amo que você é muito especial e única, sempre cheia de luz. ✨"
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

// =========================
// PRESENTE 2
// =========================

const presente2 = document.getElementById("presente2");
const conteudo2 = presente2.querySelector(".conteudo-presente");

// Quando clicar na caixinha do Presente 2
presente2.querySelector(".caixa").addEventListener("click", function () {

    alert("FUNCIONOU O PRESENTE 2! 🎁💗");

    conteudo2.style.display = "block";

});