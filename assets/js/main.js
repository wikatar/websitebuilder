// Theme Management
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
};

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};

// Smooth Scrolling
const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

// Mobile Menu
const toggleMobileMenu = (menuId, buttonId) => {
    const menu = document.getElementById(menuId);
    const button = document.getElementById(buttonId);
    if (menu && button) {
        menu.classList.toggle('hidden');
        button.setAttribute('aria-expanded', 
            button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
        );
    }
};

// Form Validation
const validateForm = (formId, rules = {}) => {
    const form = document.getElementById(formId);
    if (!form) return false;

    let isValid = true;
    const errors = {};

    // Clear previous errors
    form.querySelectorAll('.error-message').forEach(el => el.remove());

    // Validate each field
    Object.entries(rules).forEach(([fieldName, fieldRules]) => {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (!field) return;

        const value = field.value.trim();
        fieldRules.forEach(rule => {
            if (rule.required && !value) {
                errors[fieldName] = 'This field is required';
                isValid = false;
            } else if (rule.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                errors[fieldName] = 'Please enter a valid email address';
                isValid = false;
            } else if (rule.minLength && value.length < rule.minLength) {
                errors[fieldName] = `Minimum length is ${rule.minLength} characters`;
                isValid = false;
            }
        });

        // Display error if any
        if (errors[fieldName]) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message text-red-500 text-sm mt-1';
            errorDiv.textContent = errors[fieldName];
            field.parentNode.appendChild(errorDiv);
        }
    });

    return isValid;
};

// Analytics
const analytics = {
    pageView: (pageName) => {
        if (window.gtag) {
            gtag('event', 'page_view', {
                page_title: pageName,
                page_location: window.location.href,
                page_path: window.location.pathname
            });
        }
    },
    
    trackEvent: (category, action, label = null) => {
        if (window.gtag) {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();

    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').slice(1);
            scrollToElement(targetId, 60); // 60px offset for header
        });
    });

    // Track page view
    analytics.pageView(document.title);
}); 