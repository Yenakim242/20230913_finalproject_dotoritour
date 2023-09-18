// [Popup CHAT Button]
// 1 - Coger el botón y enseñar botón con una función de scroll-down
const popupchatButton = document.querySelector(".open-button");
window.onscroll = function () {
  // scrollFunction();
};

// 2 - Enseñar Chat Box
function openForm() {
  document.getElementById("chatform").style.display = "block";
}

// 3 - Cerrar Chat Box
function closeForm() {
  document.getElementById("chatform").style.display = "none";
}

// // 4 - Para enseñar el botón cuando el usuario baja la ventana 20px abajo
// function scrollFunction() {
//   if (document.body.scroppTop > 200 || document.documentElement.scrollTop > 200) {
//     popupchatButton.style.display = "block";
//   } else {
//     popupchatButton.style.display = "none";
//   }
// }
