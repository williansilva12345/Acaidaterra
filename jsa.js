document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "Açaí da Terra",
        "O melhor Açaí",
        "Venha provar!"
    ];

    const colors = ["purple", "black", "red"];
    const fonts = ["Arial, sans-serif", "Courier New, monospace", "Arial, sans-serif"];
    let index = 0;

    function changeText() {
        const textElement = document.getElementById('text');
        textElement.style.opacity = 0; // Desaparece

        setTimeout(() => {
            textElement.textContent = phrases[index];
            textElement.style.color = colors[index];
            textElement.style.fontFamily = fonts[index];
            textElement.style.textShadow = "2px 2px 8px rgba(0, 0, 0, 0.2)";
            textElement.style.opacity = 1; // Aparece
            index = (index + 1) % phrases.length; // Atualiza o índice
        }, 500); // Tempo de espera antes da mudança

        setTimeout(changeText, 2000); // Tempo entre as mudanças
    }

    changeText(); // Inicia o rotator
});
