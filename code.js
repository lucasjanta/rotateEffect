var nomefundo = document.querySelector(".nomefundo");
var nomemeio = document.querySelector(".nomemeio");

const largura = window.innerWidth;

console.log(largura);

document.addEventListener("mousemove", (movimento)=>{
    var movimentofundo = movimento.pageX;
    var porcentagemMouse = (movimentofundo * 100) / largura;
    if (porcentagemMouse > 50) {
        gsap.to(".nomefundo", {rotation: 5, duration: 2});
        gsap.to(".nomemeio", {rotation: 5, duration: 1});
    } else {
        gsap.to(".nomefundo", {rotation: -5, duration: 2});
        gsap.to(".nomemeio", {rotation: -5, duration: 1});
    }
})

