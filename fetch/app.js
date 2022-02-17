const url ="https://jsonplaceholder.typicode.com/posts/";
fetch(url)
    .then(res=>res.json())
    .then(res1=> {
        //console.log(res1)
    });
const buscarPorId= async id=>{
    try {
        const res = await fetch(url + id);
        const data=await res.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}
buscarPorId(45);


  
