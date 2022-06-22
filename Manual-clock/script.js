const hourLine = document.querySelector('.hour-line');
const minLine = document.querySelector('.min-line');
const secLine = document.querySelector('.sec-line');

const setHour = () => {
    var hours = new Date().getHours();
    var mins = new Date().getMinutes();
    var degree = hours * 30 + (mins / 2);

    hourLine.style.webkitTransform = 'rotate(' + degree + 'deg)'
}

const setMin = () => {
    let mins = new Date().getMinutes();
    let degree = mins*6;

    minLine.style.webkitTransform = 'rotate(' + degree + 'deg)'
}

const setSec = () => {
    let seconds = new Date().getSeconds();
    let degree = seconds*6;

    secLine.style.webkitTransform = 'rotate(' + degree + 'deg)'
}

setInterval(
    function () {
        setHour();
        setMin();
        setSec();
    }, 1000);