document.addEventListener("DOMContentLoaded", function () {
    const curiosidadeBtn = document.getElementById("curiosidade-btn");

    if (curiosidadeBtn) {
        curiosidadeBtn.addEventListener("click", function() {
            const curiosidades = [
                "O Agrinho já beneficiou mais de 20 milhões de alunos!",
                "O programa surgiu em 1995 e é pioneiro na educação rural.",
                "O concurso inclui categorias como redação, desenho e até robótica!",
                "Em 2024, mais de 2.500 prêmios foram distribuídos!"
            ];
            alert(curiosidades[Math.floor(Math.random() * curiosidades.length)]);
        });
    }
});

