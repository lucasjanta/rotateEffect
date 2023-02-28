var nomefundo = document.querySelector(".nomefundo");
var nomemeio = document.querySelector(".nomemeio");

const largura = window.innerWidth;

console.log(largura);

document.addEventListener("mousemove", (movimento)=>{
    var movimentofundo = movimento.pageX;
    if (movimentofundo > largura/2) {
        nomefundo.classList.toggle
    } else {
        
    }
})

