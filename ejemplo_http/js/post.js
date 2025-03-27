const postData =()=>{
    const newPost ={
        titulo: "nuevo Post",
        descripcion: "nueva descripcion",
        fecha: new Date().toISOtring()
    };
    fetch (API_URL,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            "accept": "application/json"
        },
        body: JSON.stringify(newPost)
    })
    .then(response => {
        if (!response.ok){
            throw new Error(`error en la peticion post el esta es  ${response.status}`);
        
        }
        return response.json()
    }).then(data => console.log(data))
    .catch(error => console.log(error));
}