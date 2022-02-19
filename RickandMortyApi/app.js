
//espere que se carge todo el documento que
document.addEventListener("DOMContentLoaded",()=>{
    obtenerDatos();
})

const obtenerDatos = async (url="https://rickandmortyapi.com/api/character")=>{

    try {
        dataLoading(true);
        const result= await fetch(url);
        const datos= await result.json();
        mostrarDatos(datos);
    } catch (error) {
        
    }finally {
        dataLoading(false);
    }
}

const mostrarDatos =(data)=>{
    const card= document.getElementById("card_responsive");
    card.textContent="";
    const template= document.getElementById("template_card").content;
    const fragment= document.createDocumentFragment();
    data.results.forEach(element=>{
        const clone=template.cloneNode(true);
        clone.querySelector(".card-body h5").textContent=element.name;
        clone.querySelector(".card-body p").textContent=element.species;
        clone.querySelector(".card img").setAttribute("src",element.image);

        //Para evitar el reflow
        fragment.appendChild(clone);
    })

    card.appendChild(fragment);
    mostrarPagination(data.info);
}

const mostrarPagination=(data)=>{
    const pages=document.getElementById("pagination");
    pages.textContent="";
    const template=document.getElementById("pagination-template").content;
    const clone=template.cloneNode(true);
    
    if(data.prev){
        clone.querySelector(".btn-outline-secondary").disabled =false;
    }else{
        clone.querySelector(".btn-outline-secondary").disabled =true;
    }

    if(data.next){
        clone.querySelector(".btn-outline-primary").disabled =false;
    }else{
        clone.querySelector(".btn-outline-primary").disabled =true;
    }
    pages.appendChild(clone);

    document.querySelector(".btn-outline-primary").addEventListener("click",e=>{
        pages.textContent="";
        obtenerDatos(data.next); 
    })

    document.querySelector(".btn-outline-secondary").addEventListener("click",e=>{
        pages.textContent="";
        obtenerDatos(data.prev); 
    })
    
}
const dataLoading=(estado)=>{
    const loading= document.getElementById("loading");

    if(estado){
        loading.classList.remove("d-none");
    }else{
        loading.classList.add("d-none");
    }
}