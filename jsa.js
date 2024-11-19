const sections = document.querySelectorAll('section'); // Seleciona todas as seções
const navLinks = document.querySelectorAll('.nav1 a'); // Seleciona todos os links de navegação

window.addEventListener('scroll', () => {
    let indexSec = -1;

    sections.forEach((section, index) => {
        var secTop = section.offsetTop;
        var secHeig = section.clientHeight;

        if (window.pageYOffset >= secTop - secHeig - 3) {
            indexSec = index;
        }
    });

    navLinks.forEach((link, index) => {
        link.classList.remove("active");

        if (indexSec === index) {
            link.classList.add("active");
        }
    });
});

const elementos = document.querySelectorAll('[data-anima]');
const animacao = "animacao";

function animaScroll() {
    var scroll = window.pageYOffset + 500;

    elementos.forEach((el) => {
        if (scroll > el.offsetTop) {
            el.classList.add("animacao");
        } else {
            el.classList.remove("animacao");
        }
    });
}

if (elementos.length) {
    window.addEventListener("scroll", () => {
        animaScroll();
    });
}






let currentIndex = 0; // Índice do slide atual

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Atualiza o índice do slide com base na direção
    currentIndex += direction;

    // Impede que o índice ultrapasse os limites
    if (currentIndex < 0) {
        currentIndex = 0; // Voltar ao início
    } else if (currentIndex >= totalSlides) {
        currentIndex = totalSlides - 1; // Parar no último
    }

    // Calcula a posição do carrossel
    const offset = -currentIndex * slides[0].offsetWidth;

    // Aplica o deslocamento no track
    track.style.transform = `translateX(${offset}px)`;
}


