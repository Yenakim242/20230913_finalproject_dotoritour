// S4:Practica de LS y SS
// 1. Para acumular datos de usuarios
let datos_registro_user = [];
// 2. forms
let forms = document.querySelectorAll("form");
let loader = document.querySelector('.loader');
// 3. spans validación
let spans = document.querySelectorAll("span");
// 4. Formulario de toggle de enlaces
// 4-1) De registrar a Entrar
let aEntrar = document.querySelector(".aEntrar");
// 4-2) De Entrar a Registrar
let aRegistrar = document.querySelector(".aRegistrar");
// 4-3) Formulario de toggle para visualización
// 4-3-1) En la página de Registrar, cuando hace un clic la enlace de "aEntrar", añade un evento "click"
aEntrar.addEventListener("click", ()=>{
    forms[0].classList.toggle("d-none"); //Sale el form para entrar
    forms[1].classList.toggle("d-none"); // Desaparece el form para registrar
})
// 4-3-2) En la página de Entrar, cuando hace da un clic la enlace de "aRegitrar", añade un evento "click"
aRegistrar.addEventListener("click", ()=>{
    forms[0].classList.toggle("d-none"); // Desaparece el form para entrar
    forms[1].classList.toggle("d-none"); // Sale el form para registrar
})

// 5. Página web de registro
let boton_registrar = document.getElementById("boton_registrar");
let usuario_para_registrar = document.getElementById("usuario_para_registrar");
let claves_para_registrar = document.getElementById("claves_para_registrar");

// 5-1) Cuando hace un clic boton para registrar, dar un evento 
boton_registrar.addEventListener("click", ()=>{
    resetearEstilosValidacion();
    if (usuario_para_registrar.value.length === 0) {
        usuario_para_registrar.classList.add("errorInput");
        spans[3].innerHTML = "Rellena el campo de usuario.";
    }
    if (claves_para_registrar.value.length === 0) {
        claves_para_registrar.classList.add("errorInput");
        spans[4].innerHTML = "Rellena el campo de contraseña.";
    }
    // Validación OK
    if (usuario_para_registrar.value.length !== 0) {
        // Leer la "DB del LocalStorage"
        let dbLS = JSON.parse(localStorage.getItem("usuarios"));
        // Si es el primer registro (LS devuelve null)
        if (dbLS === null) {
            datos_registro_user.push({
                "usuario" : usuario_para_registrar.value,
                "clave" : claves_para_registrar.value
            }); // colecciona la informacion del usuario
            localStorage.setItem("usuarios", JSON.stringify(datos_registro_user)); // almacena la informacion del usuario
        } else {// Compronar que el usuario no existe en el LocalStorage
            for (let i = 0; i < dbLS.length; i++) {
                if (usuario_para_registrar.value === dbLS[i].usuario) {
                    spans[5].innerHTML = "El usuario " + usuario_para_registrar.value + " ya existe.";
                    return; // Paramos el script
                }
            }
            // El usuario no existe
            datos_registro_user.push({
                "usuario": usuario_para_registrar.value,
                "clave" : claves_para_registrar.value
            });
            localStorage.setItem("usuarios", JSON.stringify(datos_registro_user));
            spans[5].innerHTML = "Usuario registrado correctamente.";
        }
    }
});

// 5. Página web de entrar
let boton_entrar = document.getElementById("boton_entrar");
let usuario_para_entrar = document.getElementById("usuario_para_entrar");
let claves_para_entrar = document.getElementById("claves_para_entrar");

// 6-1) Cuando hace un clic boton para entrar, dar un evento 
boton_entrar.addEventListener("click", ()=>{
    resetearEstilosValidacion();
    if (usuario_para_entrar.value.length === 0) {
        usuario_para_entrar.classList.add("errorInput");
        spans[0].innerHTML = "Rellena el campo de usuario.";
    }
    if (claves_para_entrar.value.length === 0) {
        claves_para_entrar.classList.add("errorInput");
        spans[1].innerHTML = "Rellena el campo de contraseña.";
    }
    // 6-2) Validación OK
    if (usuario_para_entrar.value.length !== 0 && claves_para_entrar.value !==0) {
        // 6-3) Leer la "DB del LocalStorage"
        let dbLS = JSON.parse(localStorage.getItem("usuarios"));
        for (let i = 0; i < dbLS.length; i++) {
            if (usuario_para_entrar.value === dbLS[i].usuario && claves_para_entrar.value === dbLS[i].clave) {
                // 6-4) Entrar OK
                // Grabar en sessionStorage los datos del usuario inicio de session
                sessionStorage.setItem("auth", JSON.stringify({"usuario": usuario_para_entrar.value
                }));
                // 6-5) Sale mensaje
                loader.style.display = 'block';
                spans[2].innerHTML = "Datos correctos, entrando..."; // redireccionar a home.html al cabo de 3 segundos
                setTimeout(() => {
                    location.href = "05_reserva.html";
                }, 3000);
                return; 
            }
        }
        spans[2].innerHTML = "Datos de login incorrectos!";        
    }
});


// 7. Otra función para resetear: resetear los estilos de validación
function resetearEstilosValidacion() {
    let inputs = document.querySelectorAll("input");
    // resetear los estilos en inputs
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("errorInput");
    }
    // resetear los mensajes de <span>s
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = "";
    }
}