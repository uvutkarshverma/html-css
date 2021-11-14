

document.getElementById("message-close").addEventListener("click",function(){
    let value = document.querySelectorAll("#message");
    for (let i = 0; i < value.length; i++) {
        const element = value[i];
        element.classList.add("hide");
    }
    
})
