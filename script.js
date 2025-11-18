// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! This is just a demo, so the form won\'t actually send anything.');
    this.reset();
});

// CTA button handler
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#services').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add scroll effect to header
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = '#1a252f';
    } else {
        header.style.background = '#2c3e50';
    }
    
    lastScroll = currentScroll;
});
