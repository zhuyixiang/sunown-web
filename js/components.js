/**
 * ============================================
 * 鍏叡缁勪欢鏂囦欢 - 瀵艰埅鏍忓拰椤佃剼
 * ============================================
 */

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('index.html') || path.endsWith('/') || path.endsWith('/鑻辨枃缃戦〉/')) return 'home';
    if (path.includes('about.html')) return 'about';
    if (path.includes('contact.html')) return 'contact';
    if (path.includes('manufacturing.html')) return 'facilities';
    if (path.includes('services.html')) return 'services';
    if (path.includes('hot-sales.html')) return 'hotsales';
    if (path.includes('inventory.html')) return 'inventory';
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
    
    const navbarHTML = 
    <nav class="navbar">
        <div class="container">
            <a href=\"index.html\" class=\"navbar-brand\">
                <img src=\"images/logo.png\" alt=\"Nutra Queen Inc\" class=\"logo-img\">
            </a>
            
            <button class=\"nav-toggle\" aria-label=\"Toggle navigation\">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class=\"mobile-overlay\"></div>
            
            <ul class=\"nav-menu\">
                <li><a href=\"index.html\" class=\"nav-link \">Home</a></li>
                <li><a href=\"hot-sales.html\" class=\"nav-link \">Hot Sales</a></li>
                <li><a href=\"products/inventory.html\" class=\"nav-link \">Inventory</a></li>
                
                <li class=\"dropdown\">
                    <a href=\"#\" class=\"nav-link \">Products <i class=\"bi bi-chevron-down\"></i></a>
                    <ul class=\"dropdown-menu\">
                        <li><a href=\"products/nutraceuticals.html\" class=\"dropdown-item\">Nutraceuticals</a></li>
                        <li><a href=\"products/sports-ingredients.html\" class=\"dropdown-item\">Sports Ingredients</a></li>
                        <li><a href=\"products/herbal-extracts.html\" class=\"dropdown-item\">Herbal Extracts</a></li>
                        <li><a href=\"products/vitamins.html\" class=\"dropdown-item\">Vitamins</a></li>
                        <li><a href=\"products/minerals.html\" class=\"dropdown-item\">Minerals</a></li>
                        <li><a href=\"products/peptide-protein.html\" class=\"dropdown-item\">Peptide and Protein</a></li>
                        <li><a href=\"products/function-oil.html\" class=\"dropdown-item\">Function Oil</a></li>
                        <li><a href=\"products/sweeteners.html\" class=\"dropdown-item\">Sweeteners</a></li>
                        <li><a href=\"products/cosmetic-ingredients.html\" class=\"dropdown-item\">Cosmetic Ingredients</a></li>
                    </ul>
                </li>
                
                <li><a href=\"manufacturing.html\" class=\"nav-link \">Our Facilities</a></li>
                <li><a href=\"services.html\" class=\"nav-link \">Service</a></li>
                <li><a href=\"about.html\" class=\"nav-link \">About US</a></li>
                <li><a href=\"contact.html\" class=\"nav-link \">Contact US</a></li>
            </ul>
        </div>
    </nav>
    ;
    
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
    
    const footerHTML = 
    <section class=\"cta-section\">
        <div class=\"container\">
            <h2>We're here to help! Contact us for any<br>inquiries or support you may need.</h2>
            <a href=\"contact.html\" class=\"cta-btn\">CONTACT US NOW</a>
        </div>
    </section>

    <section class=\"contact-bar\">
        <div class=\"container\">
            <div class=\"contact-item\">
                <div class=\"icon\"><i class=\"bi bi-geo-alt-fill\"></i></div>
                <div>
                    <strong>Address</strong>
                    <span>13668 Valley Blvd, Unit D1, City of Industry,<br/> CA, 91746</span>
                </div>
            </div>
            <div class=\"contact-item\">
                <div class=\"icon\"><i class=\"bi bi-telephone-fill\"></i></div>
                <div>
                    <strong>Call Us</strong>
                    <a href=\"tel:+1\">+1 (901) 295-9792</a>
                </div>
            </div>
            <div class=\"contact-item\">
                <div class=\"icon\"><i class=\"bi bi-envelope-fill\"></i></div>
                <div>
                    <strong>Email</strong>
                    <a href=\"mailto:sales@nutraqueenbio.com\">sales@nutraqueenbio.com</a>
                </div>
            </div>
        </div>
    </section>

    <footer class=\"footer\">
        <div class=\"container\">
            <div class=\"footer-col\">
                <div class=\"footer-logo\">
                    <img src=\"images/logo.png\" alt=\"Nutra Queen Inc\" class=\"logo-img-small\">
                </div>
                <p class=\"footer-about\">Nutra Queen Inc is a specialty ingredients distributor that supplies high quality ingredients to food, beverage, nutraceutical, pharmaceutical and cosmeceutical industries.</p>
            </div>
            
            <div class=\"footer-col\">
                <h6>Products</h6>
                <ul>
                    <li><a href=\"products/inventory.html\">Inventory</a></li>
                    <li><a href=\"products/nutraceuticals.html\">Nutraceuticals</a></li>
                    <li><a href=\"products/sports-ingredients.html\">Sports Ingredients</a></li>
                    <li><a href=\"products/herbal-extracts.html\">Herbal Extracts</a></li>
                    <li><a href=\"products/vitamins.html\">Vitamins</a></li>
                    <li><a href=\"products/sweeteners.html\">Sweeteners</a></li>
                </ul>
            </div>
            
            <div class=\"footer-col\">
                <h6>Company</h6>
                <ul>
                    <li><a href=\"services.html\">Services</a></li>
                    <li><a href=\"about.html\">About Us</a></li>
                    <li><a href=\"contact.html\">Contact Us</a></li>
                </ul>
            </div>
            
            <div class=\"footer-col\">
                <h6>Follow Us On:</h6>
                <div class=\"social-links\">
<!--                    <a href=\"https://www.facebook.com/share/1GLK4G8W2o/?mibextid=wwXIfr\" target=\"_blank\" class=\"social-icon\"><i class=\"bi bi-facebook\"></i></a>-->
<!--                    <a href=\"https://x.com/kongqianjuehou\" target=\"_blank\" class=\"social-icon\"><i class=\"bi bi-twitter-x\"></i></a>-->
                    <a href=\"https://www.linkedin.com/company/104148478/posts/?feedView=all\" target=\"_blank\"  class=\"social-icon\"><i class=\"bi bi-linkedin\"></i></a>
                </div>
            </div>
            
            <hr>
            <p class=\"copyright\">Copyright 漏 2025 Nutra Queen Inc | All Rights Reserved</p>
        </div>
    </footer>
    ;
    
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    loadFooter();
});
