// =========================
// PRESENTES
// =========================

// Seleciona todos os presentes
const presentes = document.querySelectorAll(".presente");


// Para cada presente...
presentes.forEach((presente) => {

    // Quando clicar nele
    presente.addEventListener("click", () => {

        // Procura o conteúdo escondido daquele presente
        const conteudo = presente.querySelector(".conteudo-presente");

        // Se estiver escondido...
        if (conteudo.style.display !== "block") {

            // Mostra o conteúdo
            conteudo.style.display = "block";

        } else {

            // Se já estiver aberto, fecha
            conteudo.style.display = "none";

        }

    });

});