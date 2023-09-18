const form = document.querySelector('#resform');
const spans = document.getElementsByClassName('errorMSG');
const inputName = document.getElementById('nombre');
const inputTel = document.getElementById('telephone');
const inputEmail = document.getElementById('email');
const optionGender = document.getElementsByClassName('genero');
const inputAddress01 = document.getElementById('address01');
const inputPostcode = document.getElementById('postcode');
const inputCity = document.getElementById('city');
const selectCountry = document.getElementById('country');
const selectTour = document.getElementById('tour');
const inputDate = document.getElementById('tourdate')
const inputDiscap = document.getElementById('discapable');
const optionLanguage = document.getElementsByClassName('idoma');
// const givenDate = Date.parse(document.resform.inputDate.value);
// const todayDate = new Date();
form.addEventListener("submit", (e) => {
    e.preventDefault();
    resetearEstiloErrorInput();
    if (inputName != null) {
        if (!inputName.value.length) {
            spans[0].textContent = "Cumple el campo de nombre.";
        } if (!inputTel.value.length) {
            spans[1].textContent = "Cumple el campo de teléfono.";
        } else if (inputTel.value.length < 9) {
            spans[1].textContent = "El número de teléfono no es válido.";
        } if (!inputEmail.value.length) {
            spans[2].textContent = "Cumple el campo de correo electrónico.";
        } if (!optionGender[0].checked && !optionGender[1].checked && !optionGender[2].checked) {
            spans[3].textContent = "Debe elegir una opción de género.";
        } if (!inputAddress01.value.length) {
            spans[4].textContent = "Cumple el campo de dirección.";
        } if (!inputPostcode.value.length) {
            spans[5].textContent = "Cumple el campo de código postal.";
        } if (!inputCity.value.length) {
            spans[6].textContent = "Cumple el campo de ciudad.";
        } if (selectCountry.value === "pais") { // desde aquí sale error...
            spans[7].textContent = "Elige una opción de pais.";
        } if (selectTour.value === "tourname") {
            spans[8].textContent = "Elige una opción de tour.";
            // } if (givenDate < todayDate || !givenDate) {
            //     spans[9].textContent = "Cumple el campo de tour.";
        } if (!inputDate.value) {
            spans[9].textContent = "Elige un día para tour que desea.";
        } if (!inputDiscap.value.length) {
            spans[10].textContent = "Cumple el campo de tour.";
        } if (!optionLanguage[0].checked && !optionLanguage[1].checked && !optionLanguage[2].checked) {
            spans[11].textContent = "Cumple el campo de tour.";
        } else {
            alert("Ha envíado la reservación. Le enviaremos un email de la comfirmación y el precio estimado pronto, ¡gracias!");
            return true;
        }
    } 
})

// [Validación del contacto formulario]
// 1 - Error Message
// 1-1) Busca los elementos que necesita
// const form = document.querySelector(".reservar-form");
// const inputNombre = document.getElementById("nombre");
// const inputTel = document.getElementById("telephone");
// const inputEmail = document.getElementById("email");
// const inputGender = document.getElementsByClassName("gender-option");
// const getGenderChecked = document.querySelector('input[name="gender"]:checked');
// const genderRadios = document.getElementsByName("gender");
// const inputDiction01 = document.getElementById("address01");
// const inputDirection02 = document.getElementById("address02");
// const selectCountry = document.getElementById("country");
// const inputCity = document.getElementById("city");
// const inputRegion = document.getElementById("region");
// const tourContainer = document.getElementsByClassName("tour-box");
// const selectTour = document.getElementById("tour");
// const inputTourdate = document.getElementById("tourdate");
// const inputDiscapable = document.getElementById("discapable");
// const inputLanguage = document.getElementsByClassName("language-box")
// const spans = document.querySelectorAll(".errorMSG");
// const botonForm = document.querySelector(".btn-send-form");
// 1-2) Añade un evento para enviar el formato
// form.addEventListener("submit", (e) => {
//     Para el evento cancelable
//     e.preventDefault();
//     1-3) para resetear los estilos de input invalido
//     resetearEstiloErrorInput();
//     1-4) Comprobar si los campos están vacío
//     if (inputNombre.value === "") {
//         inputNombre.classList.add("inputError");
//         spans[0].textContent = "Cumple el campo de nombre.";
//     } if (inputTel.value.length == 0) {
//         inputTel.classList.add("inputError");
//         spans[1].textContent = "Cumple el campo de teléfono.";
//     } if (inputEmail.value === "") {
//         inputEmail.classList.add("inputError");
//         spans[2].textContent = "Cumple el campo de correo electrónico.";
//     } if (!form.gender[0].checked && !form.gender[1].checked && !form.gender[2].checked) {
//         spans[3].textContent = "Debe elegir una opción de genero.";
//     } if (inputDiction01.value === "") {
//         inputDiction01.classList.add("inputError");
//         spans[4].textContent = "Cumple el campo de dirección.";
//     } if (inputDirection02.value === "") {
//         inputDirection02.classList.add("inputError");
//         spans[5].textContent = "Cumple el campo de código postal.";
//     }  if (selectCountry.selectedIndex == 0) {
//         inputCountry.classList.add("inputError");
//         spans[6].textContent = "Debe elegir una opción de pais.";
//     } if (inputCity.value === "") {
//         inputCity.classList.add("inputError");
//         spans[7].textContent = "Cumple el campo de ciudad.";
//     } if (inputRegion.value === "") {
//         inputRegion.classList.add("inputError");
//         spans[8].textContent = "Cumple el campo de provincia.";
//     } if (selectTour.selectedIndex == 0) { ////////////////// no sale
//         tourContainer.classList.add("inputError");
//         spans[9].textContent = "Debe elegir una opción de tour que desea.";
//     } if (document.form.tourdate.selectedIndex == "") { //////////// no sale
//         spans[10].textContent = "Debe elegir una fecha de tour que desea.";
//     } if (inputDiscapable.value === "") {   /////////////////// no sale
//         inputDiscapable.classList.add("inputError");
//         spans[11].textContent = "Cumple el campo de discapacidad.";
//     } if (!form.language[0].checked && !form.language[1].checked && !form.language[2].checked) { /////////////no sale
//         spans[12].textContent = "Debe elegir una opción de idioma.";
//     } 
//     });

// 2. Country Option Validation
// function checkforCountry() {
//     resetearEstiloErrorInput();
//     var location = document.getElementById('country');
//     var invalid = location.value == "";

//     if (invalid) {
//         spans[6].textContent = "Debe elegir una opción de país.";
//     }
//     return !invalid;
// }

// 3. Tour Option Validation
// function checkforTour() {
//     resetearEstiloErrorInput();
//     var tours = document.getElementById('tour');
//     var invalid = tours.value == "";

//     if (invalid) {
//         spans[10].textContent = "Debe elegir una opción de tour.";
//     }
//     return !invalid;
// }


// 2. Gender Group Validation
// function validationGender() {
//     const genderGroup = document.form.gender;
//     for (var i = 0; i < genderGroup.length; i++) {
//         if (genderGroup[i].checked) {
//             break;
//         }
//     }
//     if (i == genderGroup.length) {
//         inputGender.classList.add("inputError");
//         spans[3].textContent = "Debe elegir una opción de genero.";
//     }
// }
// validationGender();
// function validateGender() {
//     const genderRadios = document.getElementsByName("gender");
//     for (let i = 0; i < genderRadios.length; i++) {
//         if (!genderRadios[i].checked) {
//             select.classList.add("inputError");
//             spans[3].textContent = "Debe elegir una opción de genero.";
//         }
//     }
// }

// 3. Nation Select Group Validation
// function validate() {
//     const SelectName = document.getElementsByName("");
//     if (SelectName.selectedIndex == "") {
//         inputGender.classList.add("inputError");
//         spans[6].textContent = "Debe elegir una opción de pais";
//     }
// }

// 4. Función para resetear estilos errores
let inputs = document.querySelectorAll(".reserv-input");
// console.log(inputsContact);
function resetearEstiloErrorInput() {
    for (let i = 0; i < inputs.length; i++) {
        spans[i].textContent = "";
    }
}
