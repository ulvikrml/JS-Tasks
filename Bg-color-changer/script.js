const button = document.querySelector("button");
const h2 = document.querySelector("h2");
const container=document.querySelector("div");
//const container=document.getElementsByClassName("container");

button.addEventListener('click',() => {
    let color = '#';
    const random = Math.random().toString(16).slice(2,8);
    color += random;
//  color += Math.random().toString(16).slice(2,8);
    container.style.backgroundColor = color;
    h2.innerText = color;
    console.log(color);
})