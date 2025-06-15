class Header {
    constructor() {
        this.header = document.getElementById('header-container');
        this.init();
    }

    init() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.header.innerHTML = `
            <header class="header">
                <nav class="navbar">
                    <div class="logo">
                        <a href="/">Marcos Vinicio</a>
                    </div>
                    <ul class="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#sobre">Sobre</a></li>
                        <li><a href="/#habilidades">Tecnologias</a></li>
                        <li><a href="/#projetos">Projetos</a></li>
                        <li><a href="/#contato">Contato</a></li>
                    </ul>
                    <div class="nav-controls">
                        <div class="container">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label for="checkbox" class="label"></label>
                        </div>
                        <button class="hamburger" aria-label="Menu">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </button>
                    </div>
                </nav>
            </header>
        `;
    }

    setupEventListeners() {
        const hamburger = this.header.querySelector('.hamburger');
        const navLinks = this.header.querySelector('.nav-links');
        const checkbox = this.header.querySelector('#checkbox');
        const header = this.header.querySelector('.header');
        const navbar = this.header.querySelector('.navbar');

        const closeMenu = () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            header.classList.remove('menu-active');
        };

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            header.classList.toggle('menu-active');
        });

        // Fechar menu ao clicar em links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) {
                closeMenu();
            }
        });

        checkbox.addEventListener('change', () => {
            const theme = checkbox.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });

        // Inicializar o estado do checkbox baseado no tema atual
        const currentTheme = localStorage.getItem('theme') || 'dark';
        checkbox.checked = currentTheme === 'dark';

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