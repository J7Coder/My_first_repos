//const primero=document.querySelector(".border-primary");
//const secundo=document.querySelector(".border-secondary");
//const tercero=document.querySelector(".border-danger");

function defaulPropagation(){
    
    //Cuando se da click sobre el tercer elemento, el evento se propaga hasta el primer elemento(padre)
    primero.addEventListener("click",()=>{
        console.log("click action is beeing done on first!");
    })

    secundo.addEventListener("click",()=>{
        console.log("click action is beeing done on second!");
    })

    tercero.addEventListener("click",()=>{
    console.log("click action is beeing done on third!");
    })
}
//defaulPropagation();


function costumPropagation(){
    
    //Cuando se da click sobre el tercer elemento, el evento se propaga desdeel primer elemento(padre) hasta e ultimo elemento (hijo)
    primero.addEventListener("click",()=>{
        console.log("click action is beeing done on first!");
    },true)

    secundo.addEventListener("click",()=>{
        console.log("click action is beeing done on second!");
    },true)

    tercero.addEventListener("click",()=>{
    console.log("click action is beeing done on third!");
    },true)
}
    
//costumPropagation();


const div=document.querySelectorAll(".container .border");

div.forEach(element=>{
    element.addEventListener("click",e=>{
        e.stopPropagation();
        //console.log("I am pressed!");
    })
})

//prevent form from submit
const form=document.querySelector("form");
form.addEventListener("submit",e=>{
    e.preventDefault();
    //console.log("Just click!");
})

function seleccionarPadre(){
    const container=document.querySelector(".father");

    container.addEventListener("click",e=>{
        //console.log(e.target.id);
        if(e.target.matches(".border-danger")){
            console.log("I am the red element!")
        }else{
            console.log(e.target.className)
            console.log(e.target.dataset.div)
            //dataset devuelve un objeto asi que para acceder al valor, se debe precisar la propiedad del dataset(data-propiedad) ej. data-id(id es la prioridad del data set)
        }
    })
}

//se puede acceder a todos los elementos del documento usando la palabra clave "document"
document.addEventListener("click",e=>{
    //console.log(e.target.id);
    if(e.target.matches(".border-danger")){
        console.log("I am the red element!")
    }else{
        console.log(e.target.className)
        console.log(e.target.dataset)
        //dataset devuelve un objeto asi que para acceder al valor, se debe precisar la propiedad del dataset(data-propiedad) ej. data-id(id es la prioridad del data set)
    }
})