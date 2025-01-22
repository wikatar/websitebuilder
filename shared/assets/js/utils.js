// Utility functions for all websites

// Smooth scroll to element
function scrollToElement(elementId, offset = 0) {
    const element = document.getElementById(elementId);
    if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
}

// Toggle mobile menu
function toggleMobileMenu(menuId, buttonId) {
    const menu = document.getElementById(menuId);
    const button = document.getElementById(buttonId);
    if (menu && button) {
        menu.classList.toggle('hidden');
        button.setAttribute('aria-expanded', 
            button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
        );
    }
}

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Theme switcher
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Initialize theme from localStorage
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Form validation
function validateForm(formId, rules = {}) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    let isValid = true;
    
    Object.entries(rules).forEach(([fieldName, rule]) => {
        const field = form.elements[fieldName];
        if (!field) return;
        
        const value = field.value.trim();
        const errorElement = document.getElementById(`${fieldName}-error`);
        
        if (rule.required && !value) {
            isValid = false;
            if (errorElement) errorElement.textContent = 'This field is required';
        } else if (rule.pattern && !rule.pattern.test(value)) {
            isValid = false;
            if (errorElement) errorElement.textContent = rule.message || 'Invalid format';
        } else if (errorElement) {
            errorElement.textContent = '';
        }
    });
    
    return isValid;
}

// Analytics helper
const analytics = {
    trackEvent: function(category, action, label = null) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    },
    
    trackPageView: function(path = window.location.pathname) {
        if (typeof gtag !== 'undefined') {
            gtag('config', window.ANALYTICS_ID, {
                'page_path': path
            });
        }
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    lazyLoadImages();
}); 