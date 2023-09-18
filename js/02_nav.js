
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function reponsiveOn() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Crear Nav function
const createNav = () => {
  let nav = document.querySelector('nav');

  nav.innerHTML = `
  <div class="home-header">
        <!-- DotoriTour Logo -->
        <a href="index.html" class="logo"><img src="images/logo/whitebglogo.png" alt="dotori tour logo" class="brand-logo"></a>
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" name="search-box" id="buscador" placeholder="Buscar...">
                <button class="search-btn">buscar</button>
            </div>
        <a>
            <img src="images/navbar/login.png" id="user-img" alt="user-icon image">            
            <div class="login-logout-popup hide">
                <p class="account-info">iniciar sesión con, email</p>
                <button class="btn" id="user-btn">Cerrar sesión</button>
            </div>
        </a>
        <a href="08_login_signup_new.html"><img src="images/navbar/user.png"></a>
        </div>
    </div>
    <div class="topnav" id="myTopnav">
        <a href="index.html" class="active menu-list-link">inicio</a>
        <a href="02_sobrenosotros.html" class="menu-list-link">dotori tour</a>
        <div class="dropdown">
            <button class="dropbtn">tours <i class="fa fa-caret-down"></i></button>
                <div class="dropdown-content">
                    <a href="03_1_gaudi_half.html">gaudi half-time</a>
                    <a href="03_2_gaudi_full.html">gaudi full-time</a>
                    <a href="03_3_montserrat.html">montserrat</a>
                    <a href="03_4_girona.html">girona</a>
                    <a href="03_5_barriogotico.html">barrio gótico</a>
                    <a href="03_6_privado.html">VIP tour privado</a>
                </div>
        </div>
        <a href="04_galeria.html" class="menu-list-link">galería</a>
        <a href="08_login_signup_new.html">reservar</a>
        <a href="06_contacto.html">contacto</a>
        <a href="javascript:void(0);" class="icon" onclick="reponsiveOn()">&#9776;</a>
    </div>
  `;
}

createNav();

// NAV POP-UP
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})


window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if (user != null) {
        // significa que el usuario ha iniciado la sesión.
        popuptext.innerHTML = `Iniciar sesión como, ${user.nombre}`;
        actionBtn.innerHTML = 'Cerrar sesión';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else {
        // El usuario está desconectada
        popuptext.innerHTML = 'iniciar sesión para reservar';
        actionBtn.innerHTML = 'iniciar sesión';
        actionBtn.addEventListener('click', () => {
            location.href = '08_login_signup_new.html';
        })
    }
}