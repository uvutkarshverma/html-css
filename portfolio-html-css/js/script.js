let burger = document.getElementById("burger");

burger.addEventListener("click",function(){
    let menuItem = document.getElementById("menu-item");
    menuItem.classList.toggle("hide");
    let nav = document.getElementById("navigation")
    nav.classList.toggle("h-nav")
})