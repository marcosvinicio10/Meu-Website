// Componente Footer para injeção dinâmica
export function loadFooter(container) {
  const footerHTML = `
    <footer class="footer" data-aos="fade-up">
        <div class="footer-content">
            <div class="footer-info">
                <h3>Marcos Vinicio</h3>
                <p>Sofware Developer</p>
                <div class="footer-email">
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:marcosvinicio.dev@gmail.com">marcosvinicio.dev@gmail.com</a>
                </div>
            </div>
            <div class="footer-links">
                <a href="/">Home</a>
                <a href="/#sobre">Sobre</a>
                <a href="/#habilidades">Tecnologias</a>
                <a href="/#projetos">Projetos</a>
                <a href="/#contato">Contato</a>
            </div>
            <div class="footer-social">
                <a href="https://wa.me/5521989144959" target="_blank"><i class="fab fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/marcos.vinicio10" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://github.com/marcosvinicio10" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/marcosvinicio10" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Marcos Vinicio. Todos os direitos reservados.</p>
        </div>
    </footer>
  `;
  if (container) {
    container.innerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
} 