// Coger el botón
const preBtn = document.getElementById("pre-btn");
    window.onscroll = function () {
    scrollFunction();
};

// Enseñar el botón cuando el usuario baja la ventana 20px abajo
function scrollFunction() {
    if (document.body.scroppTop > 20 || document.documentElement.scrollTop > 20) {
        preBtn.style.display = "block";
    } else {
        preBtn.style.display = "none";
    }
}

// Scroll Up hasta la arriba del documento
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}