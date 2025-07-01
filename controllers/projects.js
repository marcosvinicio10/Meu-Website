async function loadProjects() {
    try {
        const response = await fetch('/data/projects.json');
        const data = await response.json();
        const projectsContainer = document.getElementById('projects-container');
        
        data.projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsContainer.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Erro ao carregar projetos:', error);
    }
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', Math.random() * 300); // Delay aleatório para cada card
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.resumo}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links" style="display: flex; flex-direction: column; gap: 0.7rem; margin-top: 1rem;">
                <a href="${project.link}" class="btn primary" target="_blank">
                    Abrir projeto
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <button class="btn secondary details-btn" type="button">Detalhes</button>
            </div>
        </div>
    `;
    
    return card;
}

document.addEventListener('DOMContentLoaded', loadProjects);