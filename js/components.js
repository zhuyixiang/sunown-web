/**
 * ============================================
 * 公共组件文件 - 导航栏和页脚
 * ============================================
 */

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('index.html') || path.endsWith('/') || path.endsWith('/英文网页/')) return 'home';
    if (path.includes('about.html')) return 'about';
    if (path.includes('contact.html')) return 'contact';
    if (path.includes('manufacturing.html')) return 'facilities';
    if (path.includes('services.html')) return 'services';
    if (path.includes('hot-sales.html')) return 'hotsales';
    if (path.includes('/products/')) return 'products';
    return 'home';
}

function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/products/')) return '../';
    return '';
}

function loadNavbar() {
    const currentPage = getCurrentPage();
    const base = getBasePath();
    
    const navbarHTML = `
    <nav class="navbar">
        <div class="container">
            <a href="${base}index.html" class="navbar-brand">
                <img src="${base}images/logo.png" alt="THE SUN OWNER" class="logo-img">
            </a>
            
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="mobile-overlay"></div>
            
            <ul class="nav-menu">
                <li><a href="${base}index.html" class="nav-link ${currentPage === 'home' ? 'active' : ''}">Home</a></li>
                <li><a href="${base}hot-sales.html" class="nav-link ${currentPage === 'hotsales' ? 'active' : ''}">Hot Sales</a></li>
                
                <li class="dropdown">
                    <a href="#" class="nav-link ${currentPage === 'products' ? 'active' : ''}">Products <i class="bi bi-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="${base}products/nutraceuticals.html" class="dropdown-item">Nutraceuticals</a></li>
                        <li><a href="${base}products/sports-ingredients.html" class="dropdown-item">Sports Ingredients</a></li>
                        <li><a href="${base}products/herbal-extracts.html" class="dropdown-item">Herbal Extracts</a></li>
                        <li><a href="${base}products/vitamins.html" class="dropdown-item">Vitamins</a></li>
                        <li><a href="${base}products/minerals.html" class="dropdown-item">Minerals</a></li>
                        <li><a href="${base}products/peptide-protein.html" class="dropdown-item">Peptide and Protein</a></li>
                        <li><a href="${base}products/function-oil.html" class="dropdown-item">Function Oil</a></li>
                        <li><a href="${base}products/sweeteners.html" class="dropdown-item">Sweeteners</a></li>
                        <li><a href="${base}products/cosmetic-ingredients.html" class="dropdown-item">Cosmetic Ingredients</a></li>
                    </ul>
                </li>
                
                <li><a href="${base}manufacturing.html" class="nav-link ${currentPage === 'facilities' ? 'active' : ''}">Our Facilities</a></li>
                <li><a href="${base}services.html" class="nav-link ${currentPage === 'services' ? 'active' : ''}">Service</a></li>
                <li><a href="${base}about.html" class="nav-link ${currentPage === 'about' ? 'active' : ''}">About US</a></li>
                <li><a href="${base}contact.html" class="nav-link ${currentPage === 'contact' ? 'active' : ''}">Contact US</a></li>
            </ul>
        </div>
    </nav>
    `;
    
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
    initMobileNav();
}

function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
}

function loadFooter() {
    const base = getBasePath();
    
    const footerHTML = `
    <section class="cta-section">
        <div class="container">
            <h2>We're here to help! Contact us for any<br>inquiries or support you may need.</h2>
            <a href="${base}contact.html" class="cta-btn">CONTACT US NOW</a>
        </div>
    </section>

    <section class="contact-bar">
        <div class="container">
            <div class="contact-item">
                <div class="icon"><i class="bi bi-geo-alt-fill"></i></div>
                <div>
                    <strong>Address</strong>
                    <span>220 Davidson Ave, Suite 100,<br>Somerset, NJ 08873</span>
                </div>
            </div>
            <div class="contact-item">
                <div class="icon"><i class="bi bi-telephone-fill"></i></div>
                <div>
                    <strong>Call Us</strong>
                    <a href="tel:+17328536193">+1-732-853-6193</a>
                </div>
            </div>
            <div class="contact-item">
                <div class="icon"><i class="bi bi-envelope-fill"></i></div>
                <div>
                    <strong>Email</strong>
                    <a href="mailto:sales@thesunowner.com">sales@thesunowner.com</a>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-col">
                <div class="footer-logo">
                    <img src="${base}images/logo.png" alt="THE SUN OWNER" class="logo-img-small">
                </div>
                <p class="footer-about">THE SUN OWNER is a specialty ingredients distributor that supplies high quality ingredients to food, beverage, nutraceutical, pharmaceutical and cosmeceutical industries.</p>
            </div>
            
            <div class="footer-col">
                <h6>Products</h6>
                <ul>
                    <li><a href="${base}products/nutraceuticals.html">Nutraceuticals</a></li>
                    <li><a href="${base}products/sports-ingredients.html">Sports Ingredients</a></li>
                    <li><a href="${base}products/herbal-extracts.html">Herbal Extracts</a></li>
                    <li><a href="${base}products/vitamins.html">Vitamins</a></li>
                    <li><a href="${base}products/sweeteners.html">Sweeteners</a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h6>Company</h6>
                <ul>
                    <li><a href="${base}services.html">Services</a></li>
                    <li><a href="${base}about.html">About Us</a></li>
                    <li><a href="${base}contact.html">Contact Us</a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h6>Follow Us On:</h6>
                <div class="social-links">
                    <a href="https://www.facebook.com/joshua.zhu.1983?locale=zh_CN" target="_blank" class="social-icon"><i class="bi bi-facebook"></i></a>
                    <a href="https://x.com/kongqianjuehou" target="_blank" class="social-icon"><i class="bi bi-twitter-x"></i></a>
                    <a href="#" class="social-icon"><i class="bi bi-linkedin"></i></a>
                </div>
            </div>
            
            <hr>
            <p class="copyright">Copyright © 2025 THE SUN OWNER | All Rights Reserved</p>
        </div>
    </footer>
    `;
    
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    loadFooter();
});
