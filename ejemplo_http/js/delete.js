const deleteData=()=>{
    fetch(`${API_URL}/1`,{
        method:"DELETE",
        
    }).then(response=>{
        if(!response.ok){
            throw new Error (`Error en la respuesta estado: ${response.status}`)
        }
        showResult({
            message:"el post con id 1 fue eliminado",
            Status: response.status
        });

        
    }).catch(error=> showResult(error.message,true));
}