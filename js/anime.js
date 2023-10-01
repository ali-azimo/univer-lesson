let animeScroll = document.querySelectorAll(".anime");

    window.onscroll = () => {
        animeScroll.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
    
            if (top >= offset && top < offset + height){
                sec.classList.add('show-animate');
    
                //caso queira usar animacoes repititivas
            } else{
                sec.classList.remove('show-animate');
            }
        })
    }


