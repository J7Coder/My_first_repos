
const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button");

const canasta={};

const agregarAlCanasto= e=>{

    const producto={
        titulo:e.target.dataset.shop,
        id:e.target.dataset.shop,
        cantidad:1
    };
    //verificar si ya existe la propiedad id dentro de nuestro objeto canasta
    if (canasta.hasOwnProperty(producto.id)) {
        producto.cantidad = canasta[producto.id].cantidad + 1;
    }

    canasta[producto.id] = producto;

    pintarCarrito();
};

agregar.forEach((boton) => boton.addEventListener("click", agregarAlCanasto));

const pintarCarrito = () => {
    carrito.textContent = "";

    Object.values(canasta).forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
}