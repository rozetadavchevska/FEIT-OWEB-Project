var hamburgerMenu = document.querySelector('.hamburger-menu');
var nav = document.querySelector('.menu');
var header = document.querySelector('.header');
var sticky = header.offsetTop;

hamburgerMenu.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
});

window.onscroll = ()=>{ 
    stickyNav();
}

function stickyNav (){
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}