let lista = document.querySelector(".lista");
const fragment=document.createDocumentFragment();
let paises=["France","Haiti","Canada","Espagne","Belgique"];

const template=document.querySelector(".template");

//const clone=template.content.cloneNode(true);
//clone.querySelector(".text-primary").textContent="There some new texts there!";
//lista.appendChild(clone);

const clickOver=()=>{
    alert("Click is over me!");
}

paises.forEach(pais => {
    let clone=template.content.firstElementChild.cloneNode(true);
    clone.querySelector("span").textContent=pais;
    fragment.appendChild(clone);
    clone.addEventListener("click",clickOver);
});

lista.appendChild(fragment);