class Header {
    constructor() {
        this.headerHTML = `
            <header class="header">
                <nav class="navbar">
                    <div class="logo">
                        <a href="/">Marcos Vinicio</a>
                    </div>
                    <ul class="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="/habilidades">Habilidades</a></li>
                        <li><a href="/projetos">Projetos</a></li>
                        <li><a href="/contato">Contato</a></li>
                    </ul>
                    <div class="nav-controls">
                        <div class="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }

    init() {
        // Insere o header no elemento com id 'header-container'
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            headerContainer.innerHTML = this.headerHTML;
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        // Menu mobile
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fecha menu ao clicar em links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Efeito de scroll
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// Função para inicializar o header em qualquer página
function initHeader() {
    const header = new Header();
    header.init();
}

// Inicializa o header quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initHeader); 