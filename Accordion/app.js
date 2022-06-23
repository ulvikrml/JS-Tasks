let accordion=document.querySelectorAll(".row");


accordion.forEach(data =>{
    data.addEventListener('click',function (){
        
        let icon = data.children[1];
        icon.classList.toggle("active"); 

        let panel = data.children[2];
              
        if(panel.style.display==="block"){
            panel.style.display="none"
        }        
        else{
            panel.style.display="block";
        }
    })
})