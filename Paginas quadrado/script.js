let botao = document.querySelector("#botao");
botao.style.background="blue";

let estaQuebrado=false;
let contaCliques=0;
botao.addEventListener("mouseover",trocaVerde);

function trocaVerde(){
    if(estaQuebrado===false)
    botao.style.background="green";
    botao.style.color="white";
}

botao.addEventListener("mouseout",e =>{
    if(!estaQuebrado)
    botao.style.background="blue";
    botao.style.color="black";
    });

botao.addEventListener("click",e =>{

    contaCliques++;//é igual a contaCliques=contaCliques+1;

    if(contaCliques>=3){
    botao.style.background="red";
    botao.innerHTML="quebrei";
    estaQuebrado=true;}
})

let atualiza = document.querySelector("#atualiza");
atualiza.style.background="green";

atualiza.addEventListener("click",e =>{
    estaQuebrado=false;
    botao.style.background="blue";
    botao.innerHTML="Me clique";
    contaCliques=0;
})