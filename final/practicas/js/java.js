var btnMenuopen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResposive = document.getElementById("menuBar");
    


    btnMenuopen.addEventListener("click", function (){
        menuResponsive.classList.add("active");
    });


    btnMenuClose.addEventListener("click", function (){
        menuResposive.classList.remove("active");
    });


var enlaces = document.getElementById("enlaces");

 enlaces.addEventListener("click", function(){
    menuResposive.style.transformStyle = "0.5s"
    menuResposive.classList.remove("active");
});
  


var contenedor = document.querySelector('.slider'),
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecho = document.getElementById("btn-derecha");
    
    btnDerecho.addEventListener("click", function (){
        contenedor.scrollLeft += contenedor.offseWidth;

    });

    btnIzquierdo.addEventListener("click", function (){
        contenedor.scrollLeft -= contenedor.offseWidth;
    });

