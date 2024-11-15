import './aboutMe.css';
import { elementCreator } from './elementCreator';

let aboutMeTextContainer:HTMLElement;
let aboutMeImageContainer:HTMLElement;


export const renderAboutMe = (mainSection: HTMLElement): void => {
    mainSection.innerHTML = '';
    renderPageBackground();
    renderAboutMeTextContainer(mainSection);
    renderPageHeading();
    renderPageTextContent();
    renderImageContainer(mainSection);
    renderProfileImage();
    renderPageButtons();
}


const renderPageBackground = (): void => {
    document.body.classList.remove('projects')
    document.body.classList.add('about-me');
}

const renderAboutMeTextContainer = (mainSection:HTMLElement) => {
    aboutMeTextContainer = elementCreator('section', ['about-me-text-container'], '', '');
    mainSection.appendChild(aboutMeTextContainer);
}

const renderPageHeading = (): void => {
    const aboutMeHelloHeading:HTMLElement = elementCreator('h1', ['about-me-hello-heading'], '', 'Hello,');
    aboutMeTextContainer.appendChild(aboutMeHelloHeading);
}

const renderPageTextContent = (): void => {
    const aboutMeFirstTextSection: HTMLElement = elementCreator('h2', ['about-me-first-text-section'], "I'm <span id='carl'>Carl</span> and I'm a <span id='frontend-developer'>frontend developer</span>.", '');
    aboutMeTextContainer.appendChild(aboutMeFirstTextSection);

    const aboutMeSecondTextSection: HTMLElement = elementCreator('h3', ['about-me-second-text-section'], "I <span id ='love'>love</span> creating awesome stuff with <span id='javascript'>JavaScript</span>, <span id='css'>CSS</span> & <span id='html'>HTML</span>.", '');
    aboutMeTextContainer.appendChild(aboutMeSecondTextSection);
}

const renderImageContainer = (mainSection:HTMLElement): void => {
    aboutMeImageContainer = document.createElement('section');
    aboutMeImageContainer.classList.add('about-me-image-container');
    mainSection.appendChild(aboutMeImageContainer);
}

const renderProfileImage = (): void => {
    const profileImage: HTMLImageElement = document.createElement('img');
    profileImage.classList.add('profile-image');
    profileImage.src = './profile-asset-image.svg';
    aboutMeImageContainer.appendChild(profileImage);
}

const renderPageButtons = () => {
    const buttonsContainer:HTMLDivElement = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');
    aboutMeTextContainer.appendChild(buttonsContainer);

    const getInTouchButton: HTMLButtonElement = document.createElement('button');
    getInTouchButton.classList.add('get-in-touch-button');
    getInTouchButton.setAttribute('aria-label', 'Contact me to get in touch')
    getInTouchButton.innerText = 'Get in touch!';
    buttonsContainer.appendChild(getInTouchButton);

    const downloadCVButton:HTMLButtonElement = document.createElement('button');
    downloadCVButton.classList.add('download-cv-button');
    downloadCVButton.setAttribute('aria-level', 'Download my CV in PDF format');
    downloadCVButton.innerText = 'Download CV';
    buttonsContainer.appendChild(downloadCVButton);
}