const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
];


//uso de Promesas

const idPostFind=id=>{
    const post=posts.find(item => item.id===id);

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(post){
                resolve(post);
            }else{
                reject("No se encuentra datos por el id ingresado");
            }
        },2000)
    })
    
}

//uso de async await para

const buscar= async (id) => {
        try{
            const post=await idPostFind(id);
            console.log(post);
        }catch(e){
            console.log(e);
        }finally{
            console.log("Fin de codigo");
        }
}

//buscar(1);

const buscarMultiple= async()=> {

    try {
        const post = await Promise.all([idPostFind(1),idPostFind(2)]);
        console.log(post[0].title, post[1].title);
        
    } catch (error) {
        console.log(error);
    }
}

//buscarMultiple();

//el promise all siempre funciona siempre y cuando las respuestas sean satisfactorias en el caso ccontrario si existe una busqueda que se executa dentro el buckle catch se sal tara el buckle try aun que existe soluciones satisfactorias

const buscarMultiple2= async()=> {
    try {
        const post = await Promise.all([idPostFind(4),idPostFind(2)]);
        console.log(post[0].title, post[1].title);
        
    } catch (error) {
        console.log(error);
    }
}
 buscarMultiple2() // no se ejecutara por el id=2 ya que el id=4 entra dentro del buckle catch (error)