import './projects.css';

export const renderProjects = (mainSection:HTMLElement): void => {
    mainSection.innerHTML = '';
    renderPageBackground();
}

const renderPageBackground = (): void => {
    document.body.classList.remove('about-me')
    document.body.classList.add('projects');
}
