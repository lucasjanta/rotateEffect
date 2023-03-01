var nomefundo = document.querySelector(".nomefundo");
var nomemeio = document.querySelector(".nomemeio");

document.addEventListener("mousemove", (movimento)=>{
    var largura = window.innerWidth;
    var movimentofundo = movimento.pageX;
    var porcentagemMouse = (movimentofundo * 100) / largura;
    if (porcentagemMouse > 70) {
        //Direitaif (porcentagemMouse > 70) {
            rotationVar = 5;
        } 
        else if (porcentagemMouse < 30) {
            rotationVar = -5;
        }
        else {
            rotationVar = 0;
        }
        // gsap.to(".nomefundo", {rotation: 5, duration: 2});
        // gsap.to(".nomemeio", {rotation: 5, duration: 1});
        // gsap.to(".imagemgon", {rotation: 3, duration: 0.5});
        //Esquerda
        // gsap.to(".nomefundo", {rotation: -5, duration: 2});
        // gsap.to(".nomemeio", {rotation: -5, duration: 1});
        // gsap.to(".imagemgon", {rotation: -3, duration: 0.5});
    gsap.to(".nomefundo", {rotation: rotationVar, duration: 2});
    gsap.to(".nomemeio", {rotation: rotationVar, duration: 1});


})

