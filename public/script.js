// Parallax Effect for Hero Section
function initParallax() {
    const hero = document.getElementById('hero');
    const heroContent = hero.querySelector('.hero-content');
    const featuresSection = document.querySelector('.features-section');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Hero parallax
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
        
        // Features parallax
        if (featuresSection) {
            featuresSection.style.transform = `translateY(${-scrollY * 0.1}px)`;
        }
    });
}

// Mission Text Scroll Animation
function initMissionTextAnimation() {
    const missionTextElement = document.getElementById('mission-text');
    if (!missionTextElement) return;
    
    const text = missionTextElement.textContent;
    missionTextElement.textContent = '';
    
    // Create spans for each character
    const spans = text.split('').map(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.color = 'oklch(0.40 0 0)';
        span.style.transition = 'color 0.3s';
        return span;
    });
    
    spans.forEach(span => missionTextElement.appendChild(span));
    
    // Scroll animation
    function updateMissionText() {
        const rect = missionTextElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        
        // Check if element is in viewport
        if (elementTop < windowHeight && elementBottom > 0) {
            // Calculate how much of the element is visible
            const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
            const totalHeight = rect.height;
            const scrollProgress = Math.max(0, Math.min(1, visibleHeight / totalHeight));
            
            // Calculate which letters should be white
            const lettersToShow = Math.floor(scrollProgress * text.length);
            
            spans.forEach((span, index) => {
                if (index < lettersToShow) {
                    span.style.color = 'oklch(0.98 0 0)';
                } else {
                    span.style.color = 'oklch(0.40 0 0)';
                }
            });
        }
    }
    
    window.addEventListener('scroll', updateMissionText);
    updateMissionText(); // Initial check
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = 64; // Header height
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add animation on scroll for cards
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initParallax();
    initMissionTextAnimation();
    initSmoothScroll();
    initScrollAnimations();
});

// Handle resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reinitialize mission text animation on resize
        const missionTextElement = document.getElementById('mission-text');
        if (missionTextElement && missionTextElement.children.length > 0) {
            // Already initialized, just recalculate
            window.dispatchEvent(new Event('scroll'));
        }
    }, 250);
});
