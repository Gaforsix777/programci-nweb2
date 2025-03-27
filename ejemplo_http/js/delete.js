const deleteData = ()=> {
    fetch(`${API_URL}/1`,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            "accept": "application/json"
        }
    })
    showResult(
        
    )
}