// CREAR FOOTER
const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `

        <div class="footer-content">
            <div class="footer-details">
                <img src="images/logo/whitebglogo.png" alt="dotori tour logo" class="brand-logo">
                <h4 class="footer-mobile">telefóne</h4>
                <p><i class="fa-solid fa-phone"></i> <a href="https://api.whatsapp.com/send?phone=15551234567">(+34) 634 634 634</a></p>
                <h4 class="footer-mail">email</h4>
                <p><i class="fa-regular fa-envelope"></i> <a href="mailto:info@dotoritour.com">info@dotoritour.com</a></p>
            </div>
            <div class="footer-services">
                <h4>tours</h4>
                <p><a href="03_1_gaudi_half.html">gaudi half-time</a></p>
                <p><a href="03_2_gaudi_full.html">gaudi full-time</a></p>
                <p><a href="03_3_montserrat.html">montserrat</a></p>
                <p><a href="03_4_girona.html">girona</a></p>
                <p><a href="03_5_barriogotico.html">barrio gótico</a></p>
                <p><a href="03_6_privado.html">tour privado</a></p>
            </div>
            <div class="footer-social-media">
                <h4>Social</h4>
                <p>
                    <a href="https://www.twitter.com/"><i class="fa-solid fa-x"></i> twitter</a>
                </p>
                <p>
                    <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i> facebook</a>
                </p>
                <p>
                    <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i> instagram</a>
                </p>
                <p>
                    <a href="https://www.tiktok.com/"><i class="fa-brands fa-tiktok"> </i> tiktok</a>
                </p>
            </div>
            <div class="footer-links">
                <h4>atención al cliente</h4>
                <p><a href="/02_sobrenosotros.html">dotori tour</a></p>
                <p><a href="#">términos y condiciones</a></p>
                <p><a href="#">política de privacidad</a></p>
                <p><a href="/06_contacto.html">contacto</a></p>
            </div>
        </div>
        <footer>
            <hr/>
            Dotori Tour Agency &copy; <span class="currentYear"></span>
        </footer>
    `;
}

createFooter();