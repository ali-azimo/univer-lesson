const open = document.querySelector(".open");
const close = document.querySelector(".close");
const nav = document.querySelector("#navbar");

if (open){
    open.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}