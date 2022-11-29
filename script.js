var hamburgerMenu = document.querySelector('.hamburger-menu');
var nav = document.querySelector('.menu');

var header = document.querySelector('.header');
var sticky = header.offsetTop;

let like = document.getElementsByClassName('fa-heart');
let count = document.getElementsByClassName('count');

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

for (var i = 0 ; i < like.length; i++) {
    like[i].addEventListener('click' , ()=>{
        if(like[i].classList.contains("fa-regular")){
            like[i].classList.remove("fa-regular");
            like[i].classList.add("fa-solid");
        }else{
            like[i].classList.remove("fa-solid");
            like[i].classList.add("fa-regular");
        }
    }) ; 
 }

