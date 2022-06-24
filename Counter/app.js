const num_text = document.querySelector('.num');
const inc = document.querySelector('.inc-btn');
const dec = document.querySelector('.dec-btn');
const res = document.querySelector('.res-btn');
const btn = document.querySelectorAll('.btn')

let num = 0;
btn.forEach(item =>{
    item.addEventListener('click',(e)=>{
        let className = e.currentTarget.classList;
        if(className.contains('dec-btn')){
            num++;
        }
        else if(className.contains('inc-btn')){
            num--;
        }
        else{
            num=0;
        }
        if(num>0){
            num_text.style.color='#004d00';
        }
        else if(num<0){
            num_text.style.color='#b30000';
        }
        else{
            num_text.style.color='#13222E';
        }
        num_text.innerHTML = num;
        e.preventDefault(); 
    })
})