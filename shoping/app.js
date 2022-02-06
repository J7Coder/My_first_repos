
const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
//const agregar = document.querySelectorAll(".card button");
const tempFooter=document.getElementById("templateFooter");
const footer=document.getElementById("footer")

 let canasta=[];

const agregarAlCanasto= e=>{

    const producto={
        titulo:e.target.dataset.shop,
        id:e.target.dataset.shop,
        cantidad:1,
        precio:parseInt(e.target.dataset.precio),
    };
    //verificar si ya existe el producto agregado dentro de la canasta

    const indice=canasta.findIndex(item=> item.id===producto.id);

    if(indice===-1){
        canasta.push(producto);
    }else{
        canasta[indice].cantidad++;
    }
        //console.log(canasta);
    pintarCarrito(canasta);
};

//Usando document para agregar los eventos click en diferentes objetos que tenemos
    document.addEventListener("click",(e)=>{
        if(e.target.matches(".card .btn-outline-primary")){
            agregarAlCanasto(e);
        }
        if(e.target.matches(".btn-success")){
            canasta.map(valor=> {
                if(e.target.dataset.id===valor.id){
                    valor.cantidad ++;
                }
            })
           pintarCarrito(canasta);
        }

        if(e.target.matches(".btn-danger")){

            canasta=canasta.filter(valor=> {
                if(e.target.dataset.id===valor.id){
                    if(valor.cantidad >0){
                        valor.cantidad --;
                        if(valor.cantidad===0) return;
                        return valor;
                    }
                    
                }else{
                    return valor;
                }
            })
            pintarCarrito(canasta);
        }

        
    })

const pintarCarrito = (arreglo) => {
    carrito.textContent = "";

   arreglo.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector("li div .lead span").textContent = item.precio * item.cantidad;
        clone.querySelector(".btn-success").dataset.id = item.id;
        clone.querySelector(".btn-danger").dataset.id = item.id;
        fragment.appendChild(clone);

    });
    carrito.appendChild(fragment);
    pintarFooter();
}

const pintarFooter=()=>{
    footer.textContent="";

    const total=canasta.reduce((ac,current_valor)=> ac + current_valor.cantidad*current_valor.precio,0)

    const clone = tempFooter.content.cloneNode(true);
    clone.querySelector(".lead span").textContent=total;
    fragment.appendChild(clone);
    if(!total==0){
        footer.appendChild(fragment);
    }
    
}