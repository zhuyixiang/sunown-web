/**
 * ============================================
 * NutriSource - GSAP 动画
 * 
 * 此文件包含所有 GSAP 动画效果，
 * 用于平滑的页面过渡和滚动动画。
 * 
 * GSAP（GreenSock 动画平台）用于：
 * - 页面加载动画
 * - 滚动触发动画
 * - 悬停效果
 * - 交错动画
 * 
 * 自定义：
 * - 调整 duration 值以改变动画速度
 * - 修改 ease 值以获得不同的动画曲线
 * - 更改 delay 值以调整时间
 * ============================================
 */

// 注册 GSAP ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

// 等待 DOM 准备就绪
document.addEventListener('DOMContentLoaded', function() {
    
    // 初始化所有动画
    initPageLoadAnimations();
    initScrollAnimations();
    initHoverAnimations();
    
});

/**
 * ============================================
 * 页面加载动画
 * 页面首次加载时播放的动画
 * ============================================
 */
function initPageLoadAnimations() {
    
    // 创建时间线以协调动画
    const loadTimeline = gsap.timeline({
        defaults: {
            ease: 'power3.out',
            duration: 0.8
        }
    });
    
    // 导航栏动画
    loadTimeline.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 0.6
    });
    
    // 主页横幅区域内容动画
    loadTimeline.from('.hero-section h1', {
        y: 50,
        opacity: 0,
        duration: 0.8
    }, '-=0.3');
    
    loadTimeline.from('.hero-section .lead', {
        y: 30,
        opacity: 0,
        duration: 0.6
    }, '-=0.5');
    
    loadTimeline.from('.hero-section .btn', {
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.5
    }, '-=0.4');
    
    // 主页横幅图片动画
    loadTimeline.from('.hero-section img, .hero-image', {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.8');
    
}

/**
 * ============================================
 * 滚动动画
 * 当元素滚动到视图中时触发的动画
 * ============================================
 */
function initScrollAnimations() {
    
    // ---- 服务卡片动画 ----
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services-section, .service-card',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    // ---- 关于我们区域动画 ----
    gsap.from('.about-section img, .about-image', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 75%'
        },
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });
    
    gsap.from('.about-section h2, .about-section p, .about-section .btn', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 75%'
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
    });
    
    // ---- 产品卡片动画 ----
    gsap.from('.product-card', {
        scrollTrigger: {
            trigger: '.products-section',
            start: 'top 80%'
        },
        y: 80,
        opacity: 0,
        duration: 0.7,
        stagger: {
            amount: 0.8,
            grid: 'auto',
            from: 'start'
        },
        ease: 'power2.out'
    });
    
    // ---- 产品区域标题 ----
    gsap.from('.products-section h2', {
        scrollTrigger: {
            trigger: '.products-section',
            start: 'top 85%'
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
    });
    
    // ---- 客户评价动画 ----
    gsap.from('.testimonials-section h2, .testimonials-section > .container > .row > .col-lg-3 p', {
        scrollTrigger: {
            trigger: '.testimonials-section',
            start: 'top 80%'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonials-section',
            start: 'top 75%'
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
    });
    
    // ---- 合作伙伴区域动画 ----
    gsap.from('.partner-logo', {
        scrollTrigger: {
            trigger: '.partners-section',
            start: 'top 85%'
        },
        y: 30,
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.5)'
    });
    
    // ---- 行动号召区域动画 ----
    gsap.from('.cta-section h2, .cta-section p, .cta-section .btn', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out'
    });
    
    // ---- 联系栏动画 ----
    gsap.from('.contact-bar .contact-item, .contact-bar .col-md-4', {
        scrollTrigger: {
            trigger: '.contact-bar',
            start: 'top 90%'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
    // ---- 页脚动画 ----
    gsap.from('.footer .row > div', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%'
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
}


/**
 * ============================================
 * 悬停动画
 * 卡片和按钮的交互悬停效果
 * ============================================
 */
function initHoverAnimations() {
    
    // 产品卡片悬停效果
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                duration: 0.3,
                ease: 'power2.out'
            });
            
            // 为内部图片添加动画
            const img = card.querySelector('.card-img-top');
            if (img) {
                gsap.to(img, {
                    scale: 1.1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                duration: 0.3,
                ease: 'power2.out'
            });
            
            const img = card.querySelector('.card-img-top');
            if (img) {
                gsap.to(img, {
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            }
        });
    });
    
    // 服务卡片悬停效果
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            // 图标动画
            const icon = card.querySelector('.service-icon');
            if (icon) {
                gsap.to(icon, {
                    scale: 1.1,
                    rotation: 5,
                    duration: 0.3,
                    ease: 'back.out(1.5)'
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            const icon = card.querySelector('.service-icon');
            if (icon) {
                gsap.to(icon, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    });
    
    // 社交图标悬停效果
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                y: -5,
                scale: 1.15,
                duration: 0.25,
                ease: 'back.out(2)'
            });
        });
        
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                y: 0,
                scale: 1,
                duration: 0.25,
                ease: 'power2.out'
            });
        });
    });
    
    // 按钮悬停效果
    document.querySelectorAll('.btn-primary, .btn-light').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });
}

/**
 * ============================================
 * 内页动画
 * 用于非首页的其他页面
 * ============================================
 */
function initInnerPageAnimations() {
    
    // 页面头部动画
    gsap.from('.page-header h1', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('.page-header .breadcrumb', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: 'power2.out'
    });
    
    // 产品列表项动画
    gsap.from('.product-list-item', {
        scrollTrigger: {
            trigger: '.product-list-section',
            start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
    // 分类侧边栏动画
    gsap.from('.category-sidebar', {
        scrollTrigger: {
            trigger: '.category-sidebar',
            start: 'top 85%'
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
    });
    
    // 联系表单动画
    gsap.from('.contact-form .row > div', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%'
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out'
    });
    
    // 联系信息框动画
    gsap.from('.contact-info-box, .business-hours', {
        scrollTrigger: {
            trigger: '.contact-info-box',
            start: 'top 80%'
        },
        x: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power2.out'
    });
}

// 检查是否在内页（非首页）
if (!document.querySelector('.hero-section')) {
    document.addEventListener('DOMContentLoaded', initInnerPageAnimations);
}

/**
 * ============================================
 * 工具函数：刷新 ScrollTrigger
 * 如果内容是动态加载的，请调用此函数
 * ============================================
 */
function refreshAnimations() {
    ScrollTrigger.refresh();
}
