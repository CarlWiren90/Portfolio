
/* 
interface IElementCreator {
    elementType: string,
    elementClasses: [],
    innerHTML: string,
    elementAttributes: [],

} */


export const elementCreator = (elementType: string, elementClasses: Array<string>, innerhtml:string, innertext: string, /* elementAttributes: Array<string> */) => {
    let HTMLElement: HTMLElement = document.createElement(elementType);

    elementClasses.forEach(element => {
        HTMLElement.classList.add(element);
    });

    if (innerhtml) {
        HTMLElement.innerHTML = innerhtml;
    }
    else if (innertext) {
        HTMLElement.innerText = innertext;
    }


/*     elementAttributes.forEach(attribute => {
        HTMLElement.setAttribute(attribute);
    }) */

    return HTMLElement;
}