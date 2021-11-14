burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".navlist");
rightnav = document.querySelector(".rightnav");

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('hnav')
    
    navlist.classList.toggle('v-class')
    rightnav.classList.toggle('v-class')
})









