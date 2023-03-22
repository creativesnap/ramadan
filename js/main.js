let inclick = document.querySelector("#inclick");
let invalue = document.querySelector("#invalue");
let nameing = document.querySelector(".nameing");
let overlay = document.querySelector(".overlay")




let song  = document.querySelector(".mega") // Source




inclick.addEventListener("click" , function(e) {
    e.preventDefault();

    let userValue = invalue.value ;
    
    nameing.textContent = userValue;
    overlay.style.cssText = "display : none";
    nameing.style.cssText = "display : block";

    





});

