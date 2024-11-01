let stars = document.querySelectorAll('.star');

let starIndex = 0;
let inter = setInterval(() => {
    stars[starIndex].classList.add('active');
    if (starIndex < (stars.length - 1) / 2) {
        starIndex++;
    } else {
        clearInterval(inter);
    }
}, Math.floor(Math.random() * 1000));

let starIndex2 = stars.length - 1;
let inter2 = setInterval(() => {
    stars[starIndex2].classList.add('active');
    if (starIndex2 > (stars.length - 1) / 2) {
        starIndex2--;
    } else {
        clearInterval(inter2);
    }
}, Math.floor(Math.random() * 1000));



let slider = document.querySelector('.galaxy__relaction_content');
let sliderItem = document.querySelectorAll('.galaxy__relaction_item');
let sliderGap = slider.dataset.gap;
slider.style.gridTemplateColumns = `repeat(${sliderItem.length}, 1fr)`;
slider.style.minWidth =  (Number(slider.dataset.width) * sliderItem.length) + (Number(sliderGap) * (sliderItem.length - 1)) + 'px'; 
let sliderMove = sliderItem[0].clientWidth + Number(sliderGap);

let sliderActStart = 0;
let sliderActEnd = slider.dataset.show
for (let i = sliderActStart; i < sliderActEnd; i++) {
    sliderItem[i].classList.add('active');
}

let sliderIndex = slider.dataset.index;
let sliderMoveNext = sliderIndex * sliderMove;
function next() {
    if (sliderIndex < sliderItem.length - Number(slider.dataset.show)) {
        sliderIndex++;
    } else {
        sliderIndex = 0;
    }

    sliderActStart = sliderIndex;
    sliderActEnd = Number(slider.dataset.show) + sliderIndex;
    slider.dataset.index = sliderIndex;
    sliderMoveNext = sliderIndex * sliderMove;

    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].classList.remove('active');
        sliderItem[i].style.left = '-' + sliderMoveNext + 'px';
    }
    for (let i = sliderActStart; i < sliderActEnd; i++) {
        sliderItem[i].classList.add('active');
    }
}

function prev() {
    sliderIndex = slider.dataset.index

    if (sliderIndex > 0) {
        sliderIndex--;
    } else {
        sliderIndex = sliderItem.length - slider.dataset.show;
    }

    sliderActStart = sliderIndex;
    sliderActEnd = Number(slider.dataset.show) + sliderIndex;
    slider.dataset.index = sliderIndex;
    sliderMoveNext = sliderIndex * sliderMove;

    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].classList.remove('active');
        sliderItem[i].style.left = '-' + sliderMoveNext + 'px';
    }
    for (let i = sliderActStart; i < sliderActEnd; i++) {
        sliderItem[i].classList.add('active');
    }
}

let rocket = document.querySelector('.rocket');
setInterval(() => {
    if ((Math.floor(window.scrollY) / 4) < 780) {
        rocket.style.bottom = (Math.floor(window.scrollY) / 4) - 100 + 'px';
    }
    if ((32 + Math.floor(window.scrollY) / 50) < 100) {
        rocket.style.left = 32 + Math.floor(window.scrollY) / 50 + '%';
    }
}, 1);