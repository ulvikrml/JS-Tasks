let accordion=document.querySelectorAll('.row');


accordion.forEach(data =>{
    data.addEventListener('click',function (){
        let icon = data.children[1];
        icon.classList.toggle('active'); 

        let panel = data.children[2];
        panel.classList.toggle('d-block')
    })
})