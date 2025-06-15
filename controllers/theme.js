class ThemeController {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.setupThemeToggle();
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
        
        // Update toggle button icon
        const themeToggle = document.getElementById('theme-toggle');
        if (theme === 'light') {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', () => {
            const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
            this.setTheme(newTheme);
        });
    }
}

// Inicializa o controlador de tema quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new ThemeController();
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Set light theme as default
body.classList.add('light-theme');
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    
    // Update icon
    if (body.classList.contains('light-theme')) {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}); 