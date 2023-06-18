const sliders = document.querySelectorAll('.slider');

console.log(sliders);
let counter = 0;



sliders.forEach(slider => {
    slider.addEventListener('click', () => {
        console.log(slider.value);
    });

});

sliders.forEach((slider, index) => {
    slider.style.left = `${index * 100}%`;
});

const goNext = () => {
    if (counter < sliders.length - 1) {
        counter++;
        slideImage(sliders);
        stopInterval();
    } else {
        counter = 0;
        slideImage(sliders);
        stopInterval();
    }
};

const goPrev = () => {
    if (counter > 0) {
        counter--;
        slideImage(sliders);
        stopInterval();

    }
};

const slideImage = (sliders) => {
    sliders.forEach(slider => {
        slider.style.transform = `translateX(-${counter * 100}%)`;
    })
};

let timer = setInterval(goNext, 2000)

function stopInterval() {
    clearInterval(timer);
    timer = setInterval(goNext, 2000)
}