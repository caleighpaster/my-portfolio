/**
 * Caleigh Paster Portfolio
 * Dynamic, innovative interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initNavigation();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initNavHighlight();
    initParallax();
});

/**
 * Custom cursor with follower effect
 */
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    if (!cursor || !follower) return;

    // Check if device has hover capability
    if (window.matchMedia('(hover: none)').matches) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Cursor follows immediately
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;

        // Follower has more lag
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Cursor states
    const interactiveElements = document.querySelectorAll('a, button, .production-card, .skill-item, .work-item, .publication, .edu-card, .info-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            follower.style.opacity = '0.3';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.opacity = '0.5';
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        follower.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        follower.style.opacity = '0.5';
    });
}

/**
 * Navigation scroll effect
 */
function initNavigation() {
    const nav = document.querySelector('.nav');

    if (!nav) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        // Add scrolled class for styling
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.mobile-menu');
    const links = document.querySelectorAll('.mobile-link');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll reveal animations with Intersection Observer
 */
function initScrollReveal() {
    // Add reveal class to elements
    const revealElements = [
        '.about-grid',
        '.skills-section',
        '.work-item',
        '.production-card',
        '.research-column',
        '.education-section',
        '.contact-content'
    ];

    revealElements.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.classList.add('reveal');
            el.style.transitionDelay = `${index * 0.1}s`;
        });
    });

    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Also add stagger animation to grids
    const staggerContainers = [
        '.skills-grid',
        '.work-list',
        '.productions-grid',
        '.education-grid'
    ];

    staggerContainers.forEach(selector => {
        const container = document.querySelector(selector);
        if (container) {
            container.classList.add('reveal-stagger');
            observer.observe(container);
        }
    });
}

/**
 * Highlight active nav link based on scroll position
 */
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNav() {
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav();
}

/**
 * Subtle parallax effect for floating elements
 */
function initParallax() {
    const floatingElements = document.querySelectorAll('.float-circle');
    const frameDecorations = document.querySelectorAll('.frame-decoration');

    if (floatingElements.length === 0) return;

    let ticking = false;

    function updateParallax() {
        const scrollY = window.scrollY;

        floatingElements.forEach((el, index) => {
            const speed = (index + 1) * 0.03;
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });

        frameDecorations.forEach((el, index) => {
            const speed = (index + 1) * 0.02;
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Mouse parallax for hero section
    const heroVisual = document.querySelector('.hero-visual');

    if (heroVisual) {
        document.addEventListener('mousemove', (e) => {
            const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

            frameDecorations.forEach((el, index) => {
                const speed = (index + 1) * 10;
                el.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
            });
        });
    }
}

/**
 * Add some dynamic class for loaded state
 */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
