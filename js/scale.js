let max = 1920;
let min = window.innerWidth;

let procent = max / 100;

let scaleChange = 1;

let mainContainer = document.querySelector('.main-container');

if (min < max) {
    scaleChange = min / procent;
    document.querySelector('body').style.minHeight = Math.floor((mainContainer.clientHeight / 100) * Math.floor(scaleChange)) + 'px';
    document.querySelector('body').style.maxHeight = Math.floor((mainContainer.clientHeight / 100) * Math.floor(scaleChange)) + 'px';
    scaleChange = Math.floor(scaleChange) / 100;
    mainContainer.style.transform = `scale(${scaleChange})`;
    mainContainer.style.left = '-' + ((max - min) / 2) + 'px';
    mainContainer.style.top = '-' + ((mainContainer.clientHeight - ((mainContainer.clientHeight / 100) * (min / procent)))/ 2) + 3 + 'px';
}
