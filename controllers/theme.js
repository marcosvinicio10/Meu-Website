class ThemeController {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
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