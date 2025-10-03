let cloud1 = document.querySelector('.cloud1');
let cloud2 = document.querySelector('.cloud2');
let bush1 = document.querySelector('.bush1');
let bush2 = document.querySelector('.bush2');
let bush3 = document.querySelector('.bush3');
let title = document.querySelector('.title');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    cloud1.style.transform = `translateX(${value / 5}px)`;
    cloud2.style.transform = `translateX(-${value / 5}px)`
    bush1.style.transform = `translateY(${value / 5}px)`;
    bush2.style.transform = `translateX(-${value}px)`;
    bush3.style.transform = `translateX(${value}px)`;
    title.style.transform = `translateY(${value * 1.1}px)`;
});



// Obtener todas las imágenes
const images = document.querySelectorAll('.idxSec3_imgContainer img');
// Obtener el overlay y la imagen en pantalla completa
const overlay = document.getElementById('overlay');
const fullscreenImg = document.getElementById('fullscreenImg');
// Obtener el botón de cerrar
const closeBtn = document.getElementById('closeBtn');

// Función para mostrar la imagen en pantalla completa
function openFullscreen(imgSrc) {
    fullscreenImg.src = imgSrc;
    overlay.style.display = 'flex'; // Mostrar el overlay
    document.body.style.overflow = 'hidden'; // Para deshabilitar el scroll del body
}

// Función para cerrar la imagen en pantalla completa
function closeFullscreen() {
    overlay.style.display = 'none'; // Ocultar el overlay
    document.body.style.overflow = 'auto'; // Para habilitar el scroll del body
}

// Agregar evento click a cada imagen
images.forEach(image => {
    image.addEventListener('click', function() {
        openFullscreen(this.src); // Abrir imagen en pantalla completa al hacer clic en ella
    });
});

// Agregar evento click al botón de cerrar
closeBtn.addEventListener('click', closeFullscreen);

let gameButon = document.getElementById("playGame");
let gameIframe = document.getElementById("gameIframe");

function playGame() {
    gameIframe.style.display = "block";
    gameButon.parentElement.style.display = "none";
    gameIframe.focus;
}

gameButon.addEventListener("click", playGame);