class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="main-header-row">
                <div class="inner-row">
                    <div class="logo-col">
                        <a href="Index.html">
                            <img src="../NCX HTML/src/images/svgs/NCX Blue SVG 1.svg">
                        </a>
                    </div>
                    <div class="navigation-col">
                        <ul>
                            <li><a href="#">Buy Crypto</a></li>
                            <li><a href="#">Exchange</a></li>
                            <li><a href="#">Market</a></li>
                            <li><a href="#">NCX Coin</a></li>
                        </ul>
                    </div>
                    <div class="buttons-col">
                        <a class="sing-in-btn" href="#">Sign in</a>
                        <a class="sign-up-btn" href="#">Sign Up</a>
                    </div>
                </div>
            </header>
        `
    }
}

customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-row">
                    <div class="first-column">
                        <ul>
                            <li><a href="#">Buy Crypto</a></li>
                            <li><a href="#">Crypto Exchange</a></li>
                            <li><a href="#">Markets</a></li>
                            <li><a href="#">NCX Coin</a></li>
                        </ul>
                    </div>
                    <div class="second-column">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Media Center</a></li>
                            <li><a href="#">Whitepaper</a></li>
                        </ul>
                    </div>
                    <div class="third-column">
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="fourth-column">
                        <ul>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Fees and Limits</a></li>
                            <li><a href="../NCX HTML/pages/kyc-aml-policy.html">KYC and AML Policy</a></li>
                            <li><a href="#">Prohibited Jurisdictions</a></li>
                        </ul>
                    </div>
                    <div class="fifth-column">
                        <div>
                            <div class="footer-logo"><a href="Index.html"><img src="../NCX HTML/src/images/svgs/NCX Blue SVG 1.svg"></a></div>
                            <div class="social-media">
                                <div class="icons"><a href="#"><img src="../NCX HTML/src/images/svgs/Logo_Telegram 1.svg"></a></div>
                                <div class="icons"><a href="#"><img src="../NCX HTML/src/images/svgs/Logo_Twitter 1.svg"></a></div>
                            </div>
                            <div class="info-mail"><a href="mailto:support@ncx.cx">support@ncx.cx</a></div>
                            <div class="copyright">© 2022 NCX.CX all right reserved</div>
                        </div>
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)