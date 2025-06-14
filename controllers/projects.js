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
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="btn primary" target="_blank">
                Ver Projeto
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;
    
    return card;
}

document.addEventListener('DOMContentLoaded', loadProjects);