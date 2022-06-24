let btn = document.querySelectorAll("a");
let tab_content = document.querySelectorAll(".tab");

btn.forEach(data =>{
    data.addEventListener('click',function(e){
        btn.forEach(data =>{
            data.classList.remove("active");
        })
        e.currentTarget.classList.add("active");

        tab_content.forEach(data =>{
            data.style.display="none";
        })

        currentTab=document.querySelector(e.currentTarget.dataset.tab);
        currentTab.style.display="block";
    })
})