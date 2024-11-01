function tabActive(tabContent, tabBtn) {
    let tab = document.querySelector(`#${tabContent}`);
    let allTabs = document.querySelectorAll('.tab');
    let allBnts = document.querySelectorAll('.tab__btn')
    for (let i = 0; i < allTabs.length; i++) {
        allTabs[i].classList.remove('active');
        allBnts[i].classList.remove('active');
    }
    tab.classList.add('active');
    tabBtn.classList.add('active');
}
document.getElementById('default').click();


function galaxy(galaxyTab, galaxyBtn) {
    let galaxyTabAll = document.querySelectorAll('.galaxy-tab');
    let galaxyBtnAll = document.querySelectorAll('.galaxy__btn');
    for (let i = 0; i < galaxyTabAll.length; i++) {
        galaxyTabAll[i].classList.remove('active');
    }
    for (let i = 0; i < galaxyBtnAll.length; i++) {
        galaxyBtnAll[i].classList.remove('active');
    }
    let galaxyTabs = document.querySelectorAll(`.${galaxyTab}`);
    for (let i = 0; i < galaxyTabs.length; i++) {
        galaxyTabs[i].classList.add('active');
    }
    galaxyBtn.classList.add('active');
}
document.getElementById('galaxyDefault').click();


function payment(paymentTab, paymentBtn) {
    let paymentTabAll = document.querySelectorAll('.payment-tab');
    let paymentBtnAll = document.querySelectorAll('.payment-btn');
    for (let i = 0; i < paymentBtnAll.length; i++) {
        paymentBtnAll[i].classList.remove('active');
        paymentTabAll[i].classList.remove('active');
    }
    document.querySelector(`#${paymentTab}`).classList.add('active');
    paymentBtn.classList.add('active');
}
document.getElementById('defaultPayment').click();




let ronSlider = document.querySelector('#ron-slider');
let ronSliderItem = ronSlider.querySelectorAll('.ron-slider__item');
let ronSliderItemSrc = [];
let ronSliderItemIndex = [];
let ronSliderIndex = 0;
let ronSliderAppend;

for (let i = 0; i < ronSliderItem.length; i++) {
    ronSliderItemSrc[i] = ronSliderItem[i].src;
    ronSliderItemIndex[i] = ronSliderItem[i].dataset.index;
}

ronSliderItemIndex.forEach(element => {
    ronSliderItem[element].style.left = (Number(element) * 235) - 235 + 'px';
});

function ronAutoSlider() {
    ronSliderItemIndex.forEach(element => {
        ronSliderItem[element].style.left = Number(element) * 235 + 'px';
    });

    setTimeout(() => {
        ronSliderAppend = document.createElement('img');
        ronSliderAppend.classList.add('ron-slider__item');
        ronSliderAppend.dataset.index = 0;
        ronSliderAppend.src = ronSliderItemSrc[ronSliderItem.length - 1];
        ronSliderAppend.style.left = '-' + 235 + 'px';
        ronSlider.prepend(ronSliderAppend);

        ronSliderItem[ronSliderItem.length - 1].remove();

        ronSliderItem = ronSlider.querySelectorAll('.ron-slider__item');
        ronSliderItemIndex.forEach(element => {
            ronSliderItem[element].dataset.index = element;
            ronSliderItemSrc[element] = ronSliderItem[element].src;
        });
    }, 600);
}
setInterval(() => {
    ronAutoSlider();
}, 4000);



let newSlides = document.querySelectorAll('.new-slide');
let newIndex = 0;

function activeNew() {
    if (newIndex < newSlides.length - 1) {
        newIndex++;
    } else {
        newIndex = 0;
    }
    for (let i = 0; i < newSlides.length; i++) {
        newSlides[i].classList.remove('active');
    }
    newSlides[newIndex].classList.add('active');
}

setInterval(() => {
    activeNew();
}, 3000);