// Landing Page JavaScript for Argentine Legal Claims

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll behavior for internal links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add floating button show/hide on scroll
    const floatingBtn = document.querySelector('.floating-whatsapp');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        if (floatingBtn) {
            if (window.scrollY > 300) {
                floatingBtn.style.opacity = '1';
                floatingBtn.style.visibility = 'visible';
            } else {
                floatingBtn.style.opacity = '0.8';
            }
        }
    });

    // WhatsApp button click tracking (without analytics for now)
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add loading state
            const originalText = this.innerHTML;
            this.style.opacity = '0.8';
            
            // Reset after short delay
            setTimeout(() => {
                this.style.opacity = '1';
            }, 300);
        });
    });

    // Step cards hover effect enhancement
    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}); 