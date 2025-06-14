class ThemeController {
    constructor() {
        this.themeToggle = null;
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        // Inicializa o tema
        this.setTheme(this.currentTheme);
        
        // Adiciona o botão de tema ao header
        this.addThemeToggle();
        
        // Adiciona event listener
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    addThemeToggle() {
        this.themeToggle = document.createElement('button');
        this.themeToggle.className = 'theme-toggle';
        this.themeToggle.setAttribute('aria-label', 'Toggle theme');
        this.themeToggle.innerHTML = `
            <i class="fas fa-sun"></i>
            <i class="fas fa-moon"></i>
        `;
        
        const navControls = document.querySelector('.nav-controls');
        if (navControls) {
            navControls.insertBefore(this.themeToggle, navControls.firstChild);
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(this.currentTheme);
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }
}

// Inicializa o controlador de tema quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new ThemeController();
}); 