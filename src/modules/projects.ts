import './projects.css';
import { mainSection } from '../main';

export const renderProjects = (): void => {
    mainSection.innerHTML = '';
    renderPageBackground();
}

const renderPageBackground = (): void => {
    document.body.classList.remove('about-me')
    document.body.classList.add('projects');
}
