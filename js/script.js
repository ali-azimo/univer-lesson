
//Acesso a imagens
let SildeImages = document.querySelectorAll('.slide');
//Acesso aos botoes
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
//Acesso aos indicadores
let dots = document.querySelectorAll(".dot");

let contador = 0;

//Acesso ao botao proximo
next.addEventListener("click", slideNext);
function slideNext(){
    SildeImages[contador].style.animation = 'next1 0.6s ease-in forwards';
    if(contador >= SildeImages.length-1){
        contador = 0;
    } else{
        contador ++;
    }
    SildeImages[contador].style.animation = 'next2 0.6s ease-in forwards';
    indicadores()
}

prev.addEventListener("click", slidePrev);
function slidePrev(){
    SildeImages[contador].style.animation = 'prev1 0.6s ease-in forwards';
    if(contador == 0){
        contador = SildeImages.length-1;
    } else{
        contador --;
    }
    SildeImages[contador].style.animation = 'prev2 0.6s ease-in forwards';
    indicadores();
}

//Auto slinding
function autoSliding(){
    iniInterval = setInterval(tempo, 1500);
    function tempo(){
        slideNext();
        indicadores();
    }
}
autoSliding();

//Colocando pausa no slide
const container = document.querySelector(".well-back");
container.addEventListener("mouseover", function(){
    clearInterval(iniInterval);
});

//Continuar depois do mouse-sobre
container.addEventListener("mouseout", autoSliding);

//Indicadores
function indicadores(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[contador].className += " active";
}

//Adicionar os clique
function switchImage(currentImage){
    currentImage.classList.add("active");
    let imageId = currentImage.getAttribute("attr");
    if(imageId > contador){
        SildeImages[contador].style.animation = 'next1 0.6s ease-in forwards';
        contador = imageId;
        SildeImages[contador].style.animation = 'next2 0.6s ease-in forwards';
    }
    else if(imageId == contador){
        return;
    }
    else{
        SildeImages[contador].style.animation = 'prev1 0.6s ease-in forwards';
        contador = imageId;
        SildeImages[contador].style.animation = 'prev2 0.6s ease-in forwards';
    }indicadores();
}