
import { renderAboutMe } from "./modules/aboutMe";
import { renderProjects } from "./modules/projects";


export const mainSection = document.querySelector('.main-section') as HTMLElement;



//Site loaded on entry
renderAboutMe();


const aboutMeLink: HTMLAnchorElement = document.getElementById('about-me-link');
const projectsLink: HTMLAnchorElement = document.getElementById('projects-link');

if (aboutMeLink) {
  aboutMeLink.addEventListener('click', () => {
    renderAboutMe();
  })
}
else {
  console.log('About me link not found or is null');
  throw new Error('About me link not found or is null');
}

if (projectsLink) {
  projectsLink.addEventListener('click', () => {
    renderProjects();
  })
}
