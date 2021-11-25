
let modal = document.getElementById("myModal");

btns = document.querySelectorAll(".mybtn");
btns.forEach(function (i) {
    i.addEventListener('click', function() {
        modal.style.display = "block";
    });
  });
let span = document.getElementsByClassName("close")[0];

document.querySelector(".close").addEventListener("click",function(){
  modal.style.display = "none";

})

