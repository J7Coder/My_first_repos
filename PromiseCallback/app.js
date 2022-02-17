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

//uso de callback
const buscarPorId=(id,callback) =>{
    const post=posts.find(item => item.id===id);

    if(post) {
        callback(null,post);
    }else{
        callback(`No se encuentra datos por el id ${id}`)
    }
}

//llamado a la function de la
buscarPorId(2,(err,response) =>{
    if(err) return console.log(err);

    console.log(response);
})

//uso de Promesas

const idPostFind=id=>{
    const post=posts.find(item => item.id===id);

    return new Promise((resolve,reject) =>{
        if(post){
            resolve(post);
        }else{
            reject("No se encuentra datos por el id ingresado");
        }
    })
}

//llamar a la function buscando varios objetos

idPostFind(1).then(response=> {
        console.log(response)

        return idPostFind(2)
    })
    .then(response=> {
        console.log(response)
        return idPostFind(3)
    })
    .then(response=> {
        console.log(response)
        return idPostFind(4)
    })
    .then(response=> {
        console.log(response)
    })
            .catch(error=> console.log(error));