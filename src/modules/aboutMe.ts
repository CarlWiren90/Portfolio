import './aboutMe.css';
import { mainSection } from '../main';

let aboutMeTextContainer:HTMLElement;
let aboutMeImageContainer:HTMLElement;


export const renderAboutMe = (): void => {
    mainSection.innerHTML = '';
    renderPageBackground();
    renderAboutMeTextContainer();
    renderPageHeading();
    renderPageTextContent();
    renderImageContainer();
    renderProfileImage();
    renderPageButtons();
}


const renderPageBackground = (): void => {
    document.body.classList.remove('projects')
    document.body.classList.add('about-me');
}

const renderAboutMeTextContainer = () => {
    aboutMeTextContainer = document.createElement('section');
    aboutMeTextContainer.classList.add('about-me-text-container');
    mainSection.appendChild(aboutMeTextContainer);
}

const renderPageHeading = (): void => {
    const aboutMeHelloHeading:HTMLHeadingElement = document.createElement('h1');
    aboutMeHelloHeading.classList.add('about-me-hello-heading')
    aboutMeHelloHeading.innerHTML = 'Hello,'
    aboutMeTextContainer.appendChild(aboutMeHelloHeading);
}

const renderPageTextContent = (): void => {
    const aboutMeFirstTextSection: HTMLHeadingElement = document.createElement('h2');
    aboutMeFirstTextSection.classList.add('about-me-first-text-section');
    aboutMeFirstTextSection.innerHTML = "I'm <span id='carl'>Carl</span> and I'm a <span id='frontend-developer'>frontend developer</span>.";
    aboutMeTextContainer.appendChild(aboutMeFirstTextSection);

    const aboutMeSecondTextSection: HTMLHeadingElement = document.createElement('h3');
    aboutMeSecondTextSection.classList.add('about-me-second-text-section');
    aboutMeSecondTextSection.innerHTML = "I <span id ='love'>love</span> creating awesome stuff with <span id='javascript'>JavaScript</span>, <span id='css'>CSS</span> & <span id='html'>HTML</span>.";
    aboutMeTextContainer.appendChild(aboutMeSecondTextSection);
}

const renderImageContainer = (): void => {
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
    getInTouchButton.innerText = 'Get in touch!';
    buttonsContainer.appendChild(getInTouchButton);

    const downloadCVButton:HTMLButtonElement = document.createElement('button');
    downloadCVButton.classList.add('download-cv-button');
    downloadCVButton.innerText = 'Download CV';
    buttonsContainer.appendChild(downloadCVButton);
}