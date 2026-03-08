/**
 * THE SUN OWNER - Main JavaScript
 */

$(document).ready(function() {
    initNavigation();
    initSmoothScroll();
    initAnimations();
});

/**
 * Navigation functionality
 */
function initNavigation() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled shadow');
        } else {
            $('.navbar').removeClass('scrolled shadow');
        }
    });
    
    var currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '' || currentPage === 'index.html') {
        $('.nav-link').removeClass('active');
        $('.nav-link[href="index.html"]').addClass('active');
    }
    
    if ($(window).width() > 991) {
        $('.dropdown').hover(
            function() {
                $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
            },
            function() {
                $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
            }
        );
    }
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
}

/**
 * Scroll animations
 */
function initAnimations() {
    $(window).scroll(function() {
        $('.product-card, .service-card, .testimonial-card').each(function() {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < viewportBottom - 100) {
                $(this).addClass('animate-in');
            }
        });
    });
}

/**
 * Debounce utility function
 */
function debounce(func, wait) {
    var timeout;
    return function executedFunction() {
        var context = this;
        var args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
