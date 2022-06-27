let slide = document.getElementsByClassName('slide');
let previous = document.querySelector('.previous');
let next = document.querySelector('.next');
let link = document.querySelectorAll('a');
let dot = document.getElementsByClassName('dot');
let index = 1;

let currentSlide = (num) => {
    showSlide(index = num);
}

let nextSlide = (num) => {
    showSlide(index += num)
}

let showSlide = (num) => {
    if (num > slide.length) {
        index = 1;
    }

    if (num < 1) {
        index = slide.length;
    }

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }

    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace('active', '')
    }

    slide[index - 1].style.display = 'block';
    dot[index - 1].className += (' active');
}