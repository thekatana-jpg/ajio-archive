const botones = document.querySelectorAll("[data-seccion]");
const vistas = document.querySelectorAll(".vista");

botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const nombreSeccion = boton.dataset.seccion;
        const seccionElegida = document.getElementById(nombreSeccion);

        if (!seccionElegida) {
            return;
        }

        vistas.forEach(function (vista) {
            vista.hidden = true;
        });

        seccionElegida.hidden = false;
    });

});
const frases = [
    "No es qué se dice, sino cómo se dice.",
    "¿Estoy yo mal por decir que se tardó mucho?",
    "Tienes que bajarle dos niveles, bo, te noto acelerau.",
    "ElNegro.",
    "Pa' que no olvides tus raíces, pato.",
    "Hermandad.",
    "Qué pato sonó eso.",
    "BalaInfiel.",
    "Arroz con gandules y pernil con coditos.",
    "ESTOY ENCOJONAU.",
    "Pero venía guiando y sentía que me iba a dar la mala.",
    "Eso no es un muerto, es un edificio.",
    "Todavía recuerdo cuando me calentabas el pollito pa' comer.",
    "Vamo' pa' la playa.",
    "No quiero salir con ustedes.",
    "Dominguiti de playiti.",
    "Maikol, ¿qué es de tu vida?",
    "No tengo pasto.",
    "Deberías buscar oficio.",
    "Todo un indio.",
    "#LCMCREW",
    "Vamos pa' casa de Sonia.",
    "Pues no hay playiti.",
    "Sueños Azules — JovenFrodo444.",
    "Mera, tráiganme un fili y una Corona, que este calor está HP.",
    "¿Quién será el primero de aquí en hacernos tíos?",
    "Ilusióname como mi pai cuando me dijo que me enviaría chavos: me envió 20 y 6 se los quedó Walmart.",
    "Where is Kalo?",
    "Tú nunca quieres janguear conmigo.",
    "Acho...",
    "Escúpele la cara."
];

const fraseCambiante = document.getElementById("frase-cambiante");

let numeroFrase = 0;

setInterval(function () {
    fraseCambiante.classList.add("oculta");

    setTimeout(function () {
        numeroFrase = (numeroFrase + 1) % frases.length;
        fraseCambiante.textContent = frases[numeroFrase];
        fraseCambiante.classList.remove("oculta");
    }, 500);

}, 4500);
const imagenesCarrusel = [
    "./imagenes/CerealWalk.jpeg"
];

const imagenCarrusel = document.getElementById("imagen-carrusel");
let numeroImagen = 0;

if (imagenesCarrusel.length > 1) {
    setInterval(function () {
        imagenCarrusel.classList.add("oculta");

        setTimeout(function () {
            numeroImagen = (numeroImagen + 1) % imagenesCarrusel.length;
            imagenCarrusel.src = imagenesCarrusel[numeroImagen];
            imagenCarrusel.classList.remove("oculta");
        }, 500);

    }, 5000);
}
const botonMenu = document.getElementById("boton-menu");
const menuLateral = document.getElementById("menu-lateral");

botonMenu.addEventListener("click", function () {
    const menuAbierto = menuLateral.classList.toggle("abierto");

    if (menuAbierto) {
        botonMenu.textContent = "✕";
    } else {
        botonMenu.textContent = "☰";
    }
});

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        menuLateral.classList.remove("abierto");
        botonMenu.textContent = "☰";
    });
});